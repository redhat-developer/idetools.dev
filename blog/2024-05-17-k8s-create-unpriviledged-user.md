---
slug: k8s-create-unprivileged-user
title: Create a Test Kubernetes Cluster With an Unprivileged User
authors: [datho7561]
tags: [kubernetes]
---

## Motivation

You are working on a software tool that interacts with Kubernetes clusters.
You would like to troubleshoot bugs arising due to insufficient permissions
by simulating an environment where the user has heavily restricted permissions on the cluster.

## Prerequisites

- This tutorial assumes you are using Linux or macOS. The same general steps should work on Windows, except the paths and commands might be slightly different.
- Install [kind](https://kind.sigs.k8s.io/docs/user/quick-start/), needed to create the cluster.
- *(Optional)* install [kubectx](https://github.com/ahmetb/kubectx#installation), helpful for switching Kubernetes contexts.

:::note
If you don't install `kubectx`,
you can change Kubernetes contexts by opening `~/.kube/config`,
and modifying the value of `current-context` to the name of the context you want to work with.
However, I find that it's much faster to use `kubectx`.
The tutorial is written assuming you have installed `kubectx`.
:::

## Steps

### Creating the Cluster

First, create the `kind` cluster:

```bash
kind create cluster
```

This should take around a minute.

### Creating the Service Account

Once the cluster is up and running, create a service account:

```bash
kubectl create serviceaccount my-service-account
```

And create a token associated with the service account:

```bash
kubectl create token my-service-account --duration 72h
```

This second command will output the token into the console.
Make sure to copy this token into your clipboard.

Open up your kube config (`~/.kube/config`), and create a new user entry in the `users` section:


```diff
 users:
+- name: my-service-account
+  user:
+    token: # PASTE TOKEN HERE AND REMOVE NEWLINES
 - name: kind-kind
   user:
```

:::warning
Make sure to add the token into the user entry and remove any newlines that are placed in the middle of the token,
otherwise you will be unable to use the service account
:::

Then, go up to the `contexts` section, and add the following new context:

```diff
 contexts:
 - context:
     cluster: kind-kind
     namespace: default
     user: kind-kind
   name: kind-kind
+- context:
+    cluster: kind-kind
+    namespace: default
+    user: my-service-account
+  name: my-service-account-ctx
 current-context: kind-kind
 kind: Config
```

### Creating the Role and Role Binding

Next, create the following file, `service-account-permissions.yaml`:

```yaml
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: can-list-pod
rules:
  - apiGroups: [""]
    resources: ["pods"]
    verbs: ["get", "list", "watch"]
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: can-list-pod-binding
subjects:
- kind: User
  name: system:serviceaccount:default:my-service-account
  apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: ClusterRole
  name: can-list-pod
  apiGroup: rbac.authorization.k8s.io
```

Then, apply this YAML to the cluster using the following command:

```yaml
kubectl create -f service-account-permissions.yaml
```

This creates a [`ClusterRole`](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#role-and-clusterrole),
which is a set of actions that an account is allowed to perform across all namespaces in a cluster.
The `ClusterRole` is called `"can-list-pod"`, and it allows the user to list pods in all namespaces.
The YAML file also creates a [`ClusterRoleBinding`](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#rolebinding-and-clusterrolebinding),
which specifies that `"my-service-account"`, the service account we just created,
should have the `ClusterRole` `"can-list-pod"`.

Next, we need to switch to the newly created service account.
To do this, run `kubectx my-service-account-ctx` to switch to the context that we created by editing `~/.kube/config`.

### Testing the account

In order to test that the account was created successfully,
try listing the namespaces on the cluster:

```bash
kubectl get namespace
```

You should get an "unauthorized" warning,
because the only thing the service account is allowed to do on the cluster is list pods.

Next, let's verify that you can list pods.
We should create a pod on the cluster so that there is something to list.
Use `kubectx kind-kind` to switch back to the `kind-kind` context,
so that you have permissions to create pods.

Then, run:

```bash
kubectl create deployment --image quay.io/davthomp/pet-alpine my-deployment
```

This creates a deployment, which will automatically create and manage a pod.

:::info[About the container image]
The container image that's being run is from my Quay repository.
It runs a "Hello World" webapp written in Go,
i.e. it serves the text "hello" over HTTP on port 8080 at the endpoint `/hello`.
It uses Alpine Linux as the base image.
:::

Then, switch back to the `my-service-account-ctx` context using `kubectx my-service-account-ctx`,
and then try to list the pods:

```bash
kubectl get pods
```

You should see one pod that's listed: the pod managed by the deployment we created.

### Next Steps

You've successfully set up a service account with heavily restricted access to the cluster.

If you want to give the service account more permissions, you can modify and reapply `service-account-permissions.yaml`.
You will need to switch back to the `kind-kind` user in order to reapply the changes.
Refer to [the Kubernetes documentation on role-based access control](https://kubernetes.io/docs/reference/access-authn-authz/rbac/)
for more information on setting up the permissions for the account.

### Cleaning Up

Once you are done with the cluster,
make sure to delete it.
Also, make sure to remove the new user and context that you created from your `~/.kube/config`,
since they will no longer exist when you delete the cluster.

:::info[Check out our developer tools]
If you liked this blog post,
make sure to check out [VS Code OpenShift Toolkit](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-openshift-connector)
or [Intellij OpenShift Toolkit](https://plugins.jetbrains.com/plugin/12030-openshift-toolkit-by-red-hat),
which enable you to interact with your Kubernetes or OpenShift cluster right from your IDE.
:::


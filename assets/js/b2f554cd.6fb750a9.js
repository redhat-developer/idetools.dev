"use strict";(self.webpackChunkidetools_dev=self.webpackChunkidetools_dev||[]).push([[894],{6042:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"k8s-create-unprivileged-user","metadata":{"permalink":"/blog/k8s-create-unprivileged-user","source":"@site/blog/2024-05-17-k8s-create-unpriviledged-user.md","title":"Create a Test Kubernetes Cluster With an Unprivileged User","description":"Motivation","date":"2024-05-17T00:00:00.000Z","tags":[{"label":"kubernetes","permalink":"/blog/tags/kubernetes"}],"readingTime":4.01,"hasTruncateMarker":false,"authors":[{"name":"David Thompson","title":"Software Developer @ Red Hat","url":"https://github.com/datho7561","imageURL":"https://github.com/datho7561.png","key":"datho7561"}],"frontMatter":{"slug":"k8s-create-unprivileged-user","title":"Create a Test Kubernetes Cluster With an Unprivileged User","authors":["datho7561"],"tags":["kubernetes"]},"unlisted":false},"content":"## Motivation\\n\\nYou are working on a software tool that interacts with Kubernetes clusters.\\nYou would like to troubleshoot bugs arising due to insufficient permissions\\nby simulating an environment where the user has heavily restricted permissions on the cluster.\\n\\n## Prerequisites\\n\\n- This tutorial assumes you are using Linux or macOS. The same general steps should work on Windows, except the paths and commands might be slightly different.\\n- Install [kind](https://kind.sigs.k8s.io/docs/user/quick-start/), needed to create the cluster.\\n- *(Optional)* install [kubectx](https://github.com/ahmetb/kubectx#installation), helpful for switching Kubernetes contexts.\\n\\n:::note\\nIf you don\'t install `kubectx`,\\nyou can change Kubernetes contexts by opening `~/.kube/config`,\\nand modifying the value of `current-context` to the name of the context you want to work with.\\nHowever, I find that it\'s much faster to use `kubectx`.\\nThe tutorial is written assuming you have installed `kubectx`.\\n:::\\n\\n## Steps\\n\\n### Creating the Cluster\\n\\nFirst, create the `kind` cluster:\\n\\n```bash\\nkind create cluster\\n```\\n\\nThis should take around a minute.\\n\\n### Creating the Service Account\\n\\nOnce the cluster is up and running, create a service account:\\n\\n```bash\\nkubectl create serviceaccount my-service-account\\n```\\n\\nAnd create a token associated with the service account:\\n\\n```bash\\nkubectl create token my-service-account --duration 72h\\n```\\n\\nThis second command will output the token into the console.\\nMake sure to copy this token into your clipboard.\\n\\nOpen up your kube config (`~/.kube/config`), and create a new user entry in the `users` section:\\n\\n\\n```diff\\n users:\\n+- name: my-service-account\\n+  user:\\n+    token: # PASTE TOKEN HERE AND REMOVE NEWLINES\\n - name: kind-kind\\n   user:\\n```\\n\\n:::warning\\nMake sure to add the token into the user entry and remove any newlines that are placed in the middle of the token,\\notherwise you will be unable to use the service account\\n:::\\n\\nThen, go up to the `contexts` section, and add the following new context:\\n\\n```diff\\n contexts:\\n - context:\\n     cluster: kind-kind\\n     namespace: default\\n     user: kind-kind\\n   name: kind-kind\\n+- context:\\n+    cluster: kind-kind\\n+    namespace: default\\n+    user: my-service-account\\n+  name: my-service-account-ctx\\n current-context: kind-kind\\n kind: Config\\n```\\n\\n### Creating the Role and Role Binding\\n\\nNext, create the following file, `service-account-permissions.yaml`:\\n\\n```yaml\\n---\\napiVersion: rbac.authorization.k8s.io/v1\\nkind: ClusterRole\\nmetadata:\\n  name: can-list-pod\\nrules:\\n  - apiGroups: [\\"\\"]\\n    resources: [\\"pods\\"]\\n    verbs: [\\"get\\", \\"list\\", \\"watch\\"]\\n---\\napiVersion: rbac.authorization.k8s.io/v1\\nkind: ClusterRoleBinding\\nmetadata:\\n  name: can-list-pod-binding\\nsubjects:\\n- kind: User\\n  name: system:serviceaccount:default:my-service-account\\n  apiGroup: rbac.authorization.k8s.io\\nroleRef:\\n  kind: ClusterRole\\n  name: can-list-pod\\n  apiGroup: rbac.authorization.k8s.io\\n```\\n\\nThen, apply this YAML to the cluster using the following command:\\n\\n```yaml\\nkubectl create -f service-account-permissions.yaml\\n```\\n\\nThis creates a [`ClusterRole`](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#role-and-clusterrole),\\nwhich is a set of actions that an account is allowed to perform across all namespaces in a cluster.\\nThe `ClusterRole` is called `\\"can-list-pod\\"`, and it allows the user to list pods in all namespaces.\\nThe YAML file also creates a [`ClusterRoleBinding`](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#rolebinding-and-clusterrolebinding),\\nwhich specifies that `\\"my-service-account\\"`, the service account we just created,\\nshould have the `ClusterRole` `\\"can-list-pod\\"`.\\n\\nNext, we need to switch to the newly created service account.\\nTo do this, run `kubectx my-service-account-ctx` to switch to the context that we created by editing `~/.kube/config`.\\n\\n### Testing the account\\n\\nIn order to test that the account was created successfully,\\ntry listing the namespaces on the cluster:\\n\\n```bash\\nkubectl get namespace\\n```\\n\\nYou should get an \\"unauthorized\\" warning,\\nbecause the only thing the service account is allowed to do on the cluster is list pods.\\n\\nNext, let\'s verify that you can list pods.\\nWe should create a pod on the cluster so that there is something to list.\\nUse `kubectx kind-kind` to switch back to the `kind-kind` context,\\nso that you have permissions to create pods.\\n\\nThen, run:\\n\\n```bash\\nkubectl create deployment --image quay.io/davthomp/pet-alpine my-deployment\\n```\\n\\nThis creates a deployment, which will automatically create and manage a pod.\\n\\n:::info[About the container image]\\nThe container image that\'s being run is from my Quay repository.\\nIt runs a \\"Hello World\\" webapp written in Go,\\ni.e. it serves the text \\"hello\\" over HTTP on port 8080 at the endpoint `/hello`.\\nIt uses Alpine Linux as the base image.\\n:::\\n\\nThen, switch back to the `my-service-account-ctx` context using `kubectx my-service-account-ctx`,\\nand then try to list the pods:\\n\\n```bash\\nkubectl get pods\\n```\\n\\nYou should see one pod that\'s listed: the pod managed by the deployment we created.\\n\\n### Next Steps\\n\\nYou\'ve successfully set up a service account with heavily restricted access to the cluster.\\n\\nIf you want to give the service account more permissions, you can modify and reapply `service-account-permissions.yaml`.\\nYou will need to switch back to the `kind-kind` user in order to reapply the changes.\\nRefer to [the Kubernetes documentation on role-based access control](https://kubernetes.io/docs/reference/access-authn-authz/rbac/)\\nfor more information on setting up the permissions for the account.\\n\\n### Cleaning Up\\n\\nOnce you are done with the cluster,\\nmake sure to delete it.\\nAlso, make sure to remove the new user and context that you created from your `~/.kube/config`,\\nsince they will no longer exist when you delete the cluster."}]}')}}]);
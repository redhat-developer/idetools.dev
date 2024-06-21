"use strict";(self.webpackChunkidetools_dev=self.webpackChunkidetools_dev||[]).push([[9125],{7086:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var s=t(4848),i=t(8453);const c={slug:"k8s-create-unprivileged-user",title:"Create a Test Kubernetes Cluster With an Unprivileged User",authors:["datho7561"],tags:["kubernetes"]},o=void 0,r={permalink:"/blog/k8s-create-unprivileged-user",source:"@site/blog/2024-05-17-k8s-create-unpriviledged-user.md",title:"Create a Test Kubernetes Cluster With an Unprivileged User",description:"Motivation",date:"2024-05-17T00:00:00.000Z",tags:[{label:"kubernetes",permalink:"/blog/tags/kubernetes"}],readingTime:4.21,hasTruncateMarker:!1,authors:[{name:"David Thompson",title:"Software Developer @ Red Hat",url:"https://github.com/datho7561",imageURL:"https://github.com/datho7561.png",key:"datho7561"}],frontMatter:{slug:"k8s-create-unprivileged-user",title:"Create a Test Kubernetes Cluster With an Unprivileged User",authors:["datho7561"],tags:["kubernetes"]},unlisted:!1,prevItem:{title:"Meet LSP4IJ, a new LSP Client for JetBrains-based IDEs",permalink:"/blog/lsp4ij-announcement"}},a={authorsImageUrls:[void 0]},l=[{value:"Motivation",id:"motivation",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"Creating the Cluster",id:"creating-the-cluster",level:3},{value:"Creating the Service Account",id:"creating-the-service-account",level:3},{value:"Creating the Role and Role Binding",id:"creating-the-role-and-role-binding",level:3},{value:"Testing the account",id:"testing-the-account",level:3},{value:"Next Steps",id:"next-steps",level:3},{value:"Cleaning Up",id:"cleaning-up",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"motivation",children:"Motivation"}),"\n",(0,s.jsx)(n.p,{children:"You are working on a software tool that interacts with Kubernetes clusters.\nYou would like to troubleshoot bugs arising due to insufficient permissions\nby simulating an environment where the user has heavily restricted permissions on the cluster."}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"This tutorial assumes you are using Linux or macOS. The same general steps should work on Windows, except the paths and commands might be slightly different."}),"\n",(0,s.jsxs)(n.li,{children:["Install ",(0,s.jsx)(n.a,{href:"https://kind.sigs.k8s.io/docs/user/quick-start/",children:"kind"}),", needed to create the cluster."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"(Optional)"})," install ",(0,s.jsx)(n.a,{href:"https://github.com/ahmetb/kubectx#installation",children:"kubectx"}),", helpful for switching Kubernetes contexts."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["If you don't install ",(0,s.jsx)(n.code,{children:"kubectx"}),",\nyou can change Kubernetes contexts by opening ",(0,s.jsx)(n.code,{children:"~/.kube/config"}),",\nand modifying the value of ",(0,s.jsx)(n.code,{children:"current-context"})," to the name of the context you want to work with.\nHowever, I find that it's much faster to use ",(0,s.jsx)(n.code,{children:"kubectx"}),".\nThe tutorial is written assuming you have installed ",(0,s.jsx)(n.code,{children:"kubectx"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,s.jsx)(n.h3,{id:"creating-the-cluster",children:"Creating the Cluster"}),"\n",(0,s.jsxs)(n.p,{children:["First, create the ",(0,s.jsx)(n.code,{children:"kind"})," cluster:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kind create cluster\n"})}),"\n",(0,s.jsx)(n.p,{children:"This should take around a minute."}),"\n",(0,s.jsx)(n.h3,{id:"creating-the-service-account",children:"Creating the Service Account"}),"\n",(0,s.jsx)(n.p,{children:"Once the cluster is up and running, create a service account:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubectl create serviceaccount my-service-account\n"})}),"\n",(0,s.jsx)(n.p,{children:"And create a token associated with the service account:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubectl create token my-service-account --duration 72h\n"})}),"\n",(0,s.jsx)(n.p,{children:"This second command will output the token into the console.\nMake sure to copy this token into your clipboard."}),"\n",(0,s.jsxs)(n.p,{children:["Open up your kube config (",(0,s.jsx)(n.code,{children:"~/.kube/config"}),"), and create a new user entry in the ",(0,s.jsx)(n.code,{children:"users"})," section:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:" users:\n+- name: my-service-account\n+  user:\n+    token: # PASTE TOKEN HERE AND REMOVE NEWLINES\n - name: kind-kind\n   user:\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsx)(n.p,{children:"Make sure to add the token into the user entry and remove any newlines that are placed in the middle of the token,\notherwise you will be unable to use the service account"})}),"\n",(0,s.jsxs)(n.p,{children:["Then, go up to the ",(0,s.jsx)(n.code,{children:"contexts"})," section, and add the following new context:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:" contexts:\n - context:\n     cluster: kind-kind\n     namespace: default\n     user: kind-kind\n   name: kind-kind\n+- context:\n+    cluster: kind-kind\n+    namespace: default\n+    user: my-service-account\n+  name: my-service-account-ctx\n current-context: kind-kind\n kind: Config\n"})}),"\n",(0,s.jsx)(n.h3,{id:"creating-the-role-and-role-binding",children:"Creating the Role and Role Binding"}),"\n",(0,s.jsxs)(n.p,{children:["Next, create the following file, ",(0,s.jsx)(n.code,{children:"service-account-permissions.yaml"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: can-list-pod\nrules:\n  - apiGroups: [""]\n    resources: ["pods"]\n    verbs: ["get", "list", "watch"]\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: can-list-pod-binding\nsubjects:\n- kind: User\n  name: system:serviceaccount:default:my-service-account\n  apiGroup: rbac.authorization.k8s.io\nroleRef:\n  kind: ClusterRole\n  name: can-list-pod\n  apiGroup: rbac.authorization.k8s.io\n'})}),"\n",(0,s.jsx)(n.p,{children:"Then, apply this YAML to the cluster using the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"kubectl create -f service-account-permissions.yaml\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This creates a ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/#role-and-clusterrole",children:(0,s.jsx)(n.code,{children:"ClusterRole"})}),",\nwhich is a set of actions that an account is allowed to perform across all namespaces in a cluster.\nThe ",(0,s.jsx)(n.code,{children:"ClusterRole"})," is called ",(0,s.jsx)(n.code,{children:'"can-list-pod"'}),", and it allows the user to list pods in all namespaces.\nThe YAML file also creates a ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/#rolebinding-and-clusterrolebinding",children:(0,s.jsx)(n.code,{children:"ClusterRoleBinding"})}),",\nwhich specifies that ",(0,s.jsx)(n.code,{children:'"my-service-account"'}),", the service account we just created,\nshould have the ",(0,s.jsx)(n.code,{children:"ClusterRole"})," ",(0,s.jsx)(n.code,{children:'"can-list-pod"'}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Next, we need to switch to the newly created service account.\nTo do this, run ",(0,s.jsx)(n.code,{children:"kubectx my-service-account-ctx"})," to switch to the context that we created by editing ",(0,s.jsx)(n.code,{children:"~/.kube/config"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"testing-the-account",children:"Testing the account"}),"\n",(0,s.jsx)(n.p,{children:"In order to test that the account was created successfully,\ntry listing the namespaces on the cluster:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubectl get namespace\n"})}),"\n",(0,s.jsx)(n.p,{children:'You should get an "unauthorized" warning,\nbecause the only thing the service account is allowed to do on the cluster is list pods.'}),"\n",(0,s.jsxs)(n.p,{children:["Next, let's verify that you can list pods.\nWe should create a pod on the cluster so that there is something to list.\nUse ",(0,s.jsx)(n.code,{children:"kubectx kind-kind"})," to switch back to the ",(0,s.jsx)(n.code,{children:"kind-kind"})," context,\nso that you have permissions to create pods."]}),"\n",(0,s.jsx)(n.p,{children:"Then, run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubectl create deployment --image quay.io/davthomp/pet-alpine my-deployment\n"})}),"\n",(0,s.jsx)(n.p,{children:"This creates a deployment, which will automatically create and manage a pod."}),"\n",(0,s.jsx)(n.admonition,{title:"About the container image",type:"info",children:(0,s.jsxs)(n.p,{children:['The container image that\'s being run is from my Quay repository.\nIt runs a "Hello World" webapp written in Go,\ni.e. it serves the text "hello" over HTTP on port 8080 at the endpoint ',(0,s.jsx)(n.code,{children:"/hello"}),".\nIt uses Alpine Linux as the base image."]})}),"\n",(0,s.jsxs)(n.p,{children:["Then, switch back to the ",(0,s.jsx)(n.code,{children:"my-service-account-ctx"})," context using ",(0,s.jsx)(n.code,{children:"kubectx my-service-account-ctx"}),",\nand then try to list the pods:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubectl get pods\n"})}),"\n",(0,s.jsx)(n.p,{children:"You should see one pod that's listed: the pod managed by the deployment we created."}),"\n",(0,s.jsx)(n.h3,{id:"next-steps",children:"Next Steps"}),"\n",(0,s.jsx)(n.p,{children:"You've successfully set up a service account with heavily restricted access to the cluster."}),"\n",(0,s.jsxs)(n.p,{children:["If you want to give the service account more permissions, you can modify and reapply ",(0,s.jsx)(n.code,{children:"service-account-permissions.yaml"}),".\nYou will need to switch back to the ",(0,s.jsx)(n.code,{children:"kind-kind"})," user in order to reapply the changes.\nRefer to ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/",children:"the Kubernetes documentation on role-based access control"}),"\nfor more information on setting up the permissions for the account."]}),"\n",(0,s.jsx)(n.h3,{id:"cleaning-up",children:"Cleaning Up"}),"\n",(0,s.jsxs)(n.p,{children:["Once you are done with the cluster,\nmake sure to delete it.\nAlso, make sure to remove the new user and context that you created from your ",(0,s.jsx)(n.code,{children:"~/.kube/config"}),",\nsince they will no longer exist when you delete the cluster."]}),"\n",(0,s.jsx)(n.admonition,{title:"Check out our developer tools",type:"info",children:(0,s.jsxs)(n.p,{children:["If you liked this blog post,\nmake sure to check out ",(0,s.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=redhat.vscode-openshift-connector",children:"VS Code OpenShift Toolkit"}),"\nor ",(0,s.jsx)(n.a,{href:"https://plugins.jetbrains.com/plugin/12030-openshift-toolkit-by-red-hat",children:"Intellij OpenShift Toolkit"}),",\nwhich enable you to interact with your Kubernetes or OpenShift cluster right from your IDE."]})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var s=t(6540);const i={},c=s.createContext(i);function o(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);
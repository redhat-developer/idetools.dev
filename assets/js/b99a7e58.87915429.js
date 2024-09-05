"use strict";(self.webpackChunkidetools_dev=self.webpackChunkidetools_dev||[]).push([[7105],{5159:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=a(4848),o=a(8453);const s={slug:"java-1_8-compliance",title:"Dropping support of older Java releases in vscode-java",authors:["rgrunber"],tags:["vscode","java","lsp"]},n=void 0,i={permalink:"/blog/java-1_8-compliance",source:"@site/blog/2024-08-29-java-1_8-compliance.md",title:"Dropping support of older Java releases in vscode-java",description:"A percentage (~4%) of users trying out our latest release of vscode-java 1.33.0 were probably disappointed to note that we dropped support for Java versions prior to 1.8. This wasn't something we did intentionally but it happened in the JDT Core library that we rely on for much of our Java functionality. While losing existing functionality is frustrating, I'll go over why this change was necessary and how it will set up the JDT Core project, the Java language server (JDT-LS), and vscode-java for success in the longer term.",date:"2024-08-29T00:00:00.000Z",tags:[{label:"vscode",permalink:"/blog/tags/vscode"},{label:"java",permalink:"/blog/tags/java"},{label:"lsp",permalink:"/blog/tags/lsp"}],readingTime:1.495,hasTruncateMarker:!1,authors:[{name:"Roland Grunberg",title:"Principal Software Developer @ Red Hat",url:"https://github.com/rgrunber",imageURL:"https://github.com/rgrunber.png",key:"rgrunber"}],frontMatter:{slug:"java-1_8-compliance",title:"Dropping support of older Java releases in vscode-java",authors:["rgrunber"],tags:["vscode","java","lsp"]},unlisted:!1,prevItem:{title:"Supporting dynamic code actions in VS Code Java",permalink:"/blog/dynamic-proposals"},nextItem:{title:"Meet LSP4IJ, a new LSP Client for JetBrains-based IDEs",permalink:"/blog/lsp4ij-announcement"}},l={authorsImageUrls:[void 0]},c=[{value:"There&#39;s a JEP for that",id:"theres-a-jep-for-that",level:3},{value:"Maintenance burden",id:"maintenance-burden",level:3},{value:"Perspective",id:"perspective",level:3}];function d(e){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["A percentage (~4%) of users trying out our latest release of vscode-java ",(0,r.jsx)(t.a,{href:"https://github.com/redhat-developer/vscode-java/releases/tag/v1.33.0",children:"1.33.0"})," were probably disappointed to note that we dropped support for Java versions prior to 1.8. This wasn't something we did intentionally but it happened in the ",(0,r.jsx)(t.a,{href:"https://github.com/eclipse-jdt/eclipse.jdt.core",children:"JDT Core"})," library that we rely on for much of our Java functionality. While losing existing functionality is frustrating, I'll go over why this change was necessary and how it will set up the JDT Core project, the Java language server (",(0,r.jsx)(t.a,{href:"https://github.com/eclipse-jdtls/eclipse.jdt.ls",children:"JDT-LS"}),"), and ",(0,r.jsx)(t.a,{href:"https://github.com/redhat-developer/vscode-java",children:"vscode-java"})," for success in the longer term."]}),"\n",(0,r.jsx)(t.h3,{id:"theres-a-jep-for-that",children:"There's a JEP for that"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://openjdk.org/jeps/182",children:"JEP-182"})," already defines a process for this exact thing. Although the policy would have to change to take into account the 6-month release cadence, it's clear that a move towards supporting fewer older releases is desired."]}),"\n",(0,r.jsxs)(t.p,{children:["As of now, ",(0,r.jsx)(t.code,{children:"javac"})," from the OpenJDK 22 developments tools no longer support a pre-1.8 source/target/release flag :"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"$ javac --help\n  ...\n  ...\n  --release <release>\n        Compile for the specified Java SE release.\n        Supported releases:\n            8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22\n  ...\n  ...\n"})}),"\n",(0,r.jsx)(t.h3,{id:"maintenance-burden",children:"Maintenance burden"}),"\n",(0,r.jsxs)(t.p,{children:["Going through the discussion ( ",(0,r.jsx)(t.a,{href:"https://github.com/eclipse-jdt/eclipse.jdt.core/discussions/820",children:"https://github.com/eclipse-jdt/eclipse.jdt.core/discussions/820"})," ) in JDT Core to drop the support, it's clear there's a cost to supporting the older versions. It also affects the time it takes to implement new features that must deal with the added complexity from those older versions. Simplifying the codebase will translate into more features, implemented more quickly and an easier maintenance."]}),"\n",(0,r.jsx)(t.h3,{id:"perspective",children:"Perspective"}),"\n",(0,r.jsxs)(t.p,{children:["So where does that leave affected users ? They could continue to stay on vscode-java ",(0,r.jsx)(t.a,{href:"https://github.com/redhat-developer/vscode-java/releases/tag/v1.32.0",children:"1.32.0"}),", until they update their project to Java 1.8 or above. It's definitely not ideal for those depending on older Java versions but the newer features, and improvements should certainly make up for it."]})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>n,x:()=>i});var r=a(6540);const o={},s=r.createContext(o);function n(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:n(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);
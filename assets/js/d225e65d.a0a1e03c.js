"use strict";(self.webpackChunkidetools_dev=self.webpackChunkidetools_dev||[]).push([[7200],{1941:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=t(4848),s=t(8453);const r={slug:"lsp4ij-announcement",title:"Meet LSP4IJ, a new LSP Client for JetBrains-based IDEs",authors:["angelozerr","fbricon"],tags:["lsp","intellij","lsp4ij"]},a=void 0,l={permalink:"/blog/lsp4ij-announcement",source:"@site/blog/2024-06-20-lsp4ij-announcement.md",title:"Meet LSP4IJ, a new LSP Client for JetBrains-based IDEs",description:"LSP4IJ is a new, free and open-source Language Server Protocol (LSP) client for JetBrains-based IDEs, compatible with both community and enterprise flavors.",date:"2024-06-20T00:00:00.000Z",tags:[{label:"lsp",permalink:"/blog/tags/lsp"},{label:"intellij",permalink:"/blog/tags/intellij"},{label:"lsp4ij",permalink:"/blog/tags/lsp-4-ij"}],readingTime:9.55,hasTruncateMarker:!1,authors:[{name:"Angelo Zerr",title:"Principal Software Engineer @ Red Hat",url:"https://github.com/angelozerr",imageURL:"https://github.com/angelozerr.png",key:"angelozerr"},{name:"Fred Bricon",title:"Principal Software Engineer @ Red Hat",url:"https://github.com/fbricon",imageURL:"https://github.com/fbricon.png",key:"fbricon"}],frontMatter:{slug:"lsp4ij-announcement",title:"Meet LSP4IJ, a new LSP Client for JetBrains-based IDEs",authors:["angelozerr","fbricon"],tags:["lsp","intellij","lsp4ij"]},unlisted:!1,prevItem:{title:"Dropping support of older Java releases in vscode-java",permalink:"/blog/java-1_8-compliance"},nextItem:{title:"Create a Test Kubernetes Cluster With an Unprivileged User",permalink:"/blog/k8s-create-unprivileged-user"}},o={authorsImageUrls:[void 0,void 0]},d=[{value:"Why LSP4IJ?",id:"why-lsp4ij",level:2},{value:"LSP support overview",id:"lsp-support-overview",level:2},{value:"LSP features",id:"lsp-features",level:3},{value:"Cancellation Support",id:"cancellation-support",level:4},{value:"LSP consoles view",id:"lsp-consoles-view",level:3},{value:"Installation",id:"installation",level:2},{value:"Quickly get started with LSP4IJ",id:"quickly-get-started-with-lsp4ij",level:2},{value:"Example: Adding TypeScript support",id:"example-adding-typescript-support",level:3},{value:"Step 1: Install the language server",id:"step-1-install-the-language-server",level:4},{value:"Step 2: Create a language server in LSP4IJ",id:"step-2-create-a-language-server-in-lsp4ij",level:4},{value:"Define launch command",id:"define-launch-command",level:5},{value:"Define mappings",id:"define-mappings",level:5},{value:"Define configuration",id:"define-configuration",level:5},{value:"Using a Template",id:"using-a-template",level:3},{value:"Export server",id:"export-server",level:3},{value:"How to integrate your language server in an IntelliJ plugin.",id:"how-to-integrate-your-language-server-in-an-intellij-plugin",level:2},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://plugins.jetbrains.com/plugin/23257-lsp4ij",children:"LSP4IJ"})," is a new, free and open-source Language Server Protocol (LSP) client for JetBrains-based IDEs, compatible with both ",(0,i.jsx)(n.strong,{children:"community"})," and enterprise flavors."]}),"\n",(0,i.jsx)(n.p,{children:"It provides outstanding features such as:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ability to ",(0,i.jsx)(n.a,{href:"https://github.com/redhat-developer/lsp4ij/blob/main/docs/UserDefinedLanguageServer.md",children:"configure LSP servers without developing a new plug-in"})," (restricted to stdio-based connections for the moment)."]}),"\n",(0,i.jsxs)(n.li,{children:["A ",(0,i.jsx)(n.a,{href:"https://github.com/redhat-developer/lsp4ij/blob/main/docs/DeveloperGuide.md",children:"set of API allowing third-party adopters to contribute LSP extensions"})," to the JetBrains ecosystem"]}),"\n",(0,i.jsxs)(n.li,{children:["a ",(0,i.jsx)(n.a,{href:"https://github.com/redhat-developer/lsp4ij/blob/main/docs/UserGuide.md#lsp-console",children:"console view"}),", allowing users to monitor and troubleshoot the communication between the IDE and the LSP servers."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The client already supports a significant amount of ",(0,i.jsx)(n.a,{href:"https://github.com/redhat-developer/lsp4ij/blob/main/docs/LSPSupport.md",children:"features"})," from the LSP 3.17 specification, and more are on their way."]}),"\n",(0,i.jsx)(n.h2,{id:"why-lsp4ij",children:"Why LSP4IJ?"}),"\n",(0,i.jsxs)(n.p,{children:["The Devtools team at Red Hat has been working on free and open-source language servers for ",(0,i.jsx)(n.em,{children:"many"})," years. We have offered LSP implementations for ",(0,i.jsx)(n.a,{href:"https://github.com/eclipse/eclipse.jdt.ls/",children:"Java"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/redhat-developer/yaml-language-server",children:"YAML"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/eclipse/lemminx",children:"XML"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/eclipse/lsp4mp",children:"MicroProfile"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/redhat-developer/quarkus-ls",children:"Quarkus"})," and ",(0,i.jsx)(n.a,{href:"https://github.com/redhat-developer/quarkus-ls/tree/master/qute.ls",children:"Qute"}),", that were integrated into Visual Studio Code via several extensions. Some of those language servers have also been integrated into Eclipse IDE."]}),"\n",(0,i.jsxs)(n.p,{children:["By 2019, JetBrains already provided some ",(0,i.jsx)(n.a,{href:"https://quarkus.io/",children:"Quarkus"})," support in IntelliJ IDEA Ultimate to their paid customers. But when Red Hat wanted to bring the same awesome ",(0,i.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=redhat.vscode-quarkus",children:"Quarkus tools"})," VS Code already had, to the wider IntelliJ IDEA Community, an LSP client for IntelliJ was needed."]}),"\n",(0,i.jsxs)(n.p,{children:["At that time, we evaluated ",(0,i.jsx)(n.a,{href:"https://github.com/ballerina-platform/lsp4intellij",children:"Ballerina's lsp4intellij library"}),", which provides advanced LSP support but has the following limitations:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Quarkus / Qute language servers have a complicated mechanism, delegating parts of the work to the IDE's Java support (JDT for Eclipse and Psi for IntelliJ), to avoid parsing Java classes twice (once by the language server, another the built-in Java support). We encountered numerous freezes."}),"\n",(0,i.jsx)(n.li,{children:"Ballerina implements certain LSP features without reusing IntelliJ built-in extension points (ex: hover, go to declaration)"}),"\n",(0,i.jsx)(n.li,{children:"Tracing server status (starting, started, stopping, stopped) is difficult, which makes server startup issues hard to troubleshoot."}),"\n",(0,i.jsx)(n.li,{children:"Ballerina features are mostly based on a Timeout system, which stops LSP requests after a defined time."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"To integrate our Quarkus and Qute language servers, the LSP support in IntelliJ needed to:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"never freeze, even when the language server cannot be started."}),"\n",(0,i.jsx)(n.li,{children:"not rely on a timeout system, but instead properly manage LSP request cancellations (when the file is modified for example)"}),"\n",(0,i.jsx)(n.li,{children:"provide a UI allowing easy tracking of the state of the language servers"}),"\n",(0,i.jsx)(n.li,{children:"provide an LSP console that displays LSP traces and server logs."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For these reasons, we developed the LSP support we needed directly within the ",(0,i.jsx)(n.a,{href:"https://github.com/redhat-developer/intellij-quarkus/",children:(0,i.jsx)(n.code,{children:"Quarkus Tools for IntelliJ"})})," plugin. It actually started as a port of the ",(0,i.jsx)(n.a,{href:"https://github.com/eclipse/lsp4e",children:(0,i.jsx)(n.code,{children:"Eclipse LSP4E"})})," project. It took us several years, but we ended up with an LSP support that was mature and efficient."]}),"\n",(0,i.jsxs)(n.p,{children:["In 2023, JetBrains finally decided to ",(0,i.jsx)(n.a,{href:"https://blog.jetbrains.com/platform/2023/07/lsp-for-plugin-developers/",children:"start providing some LSP support"}),", but to only make it available in their commercial products, which was a not a good fit for us as we couldn't use it for ",(0,i.jsx)(n.code,{children:"Quarkus Tools"}),". It was also lacking some features we really, really, liked in our LSP client, notably the LSP Consoles view."]}),"\n",(0,i.jsx)(n.p,{children:"Seeing our own LSP support held up pretty well for Quarkus and Qute, we decided to extract it into its own standalone project, to provide generic LSP support, for all JetBrains products, notably the community ones. Hence LSP4IJ was born."}),"\n",(0,i.jsx)(n.h2,{id:"lsp-support-overview",children:"LSP support overview"}),"\n",(0,i.jsx)(n.h3,{id:"lsp-features",children:"LSP features"}),"\n",(0,i.jsxs)(n.p,{children:["LSP4IJ implements basic LSP features like ",(0,i.jsx)(n.code,{children:"completion"}),", ",(0,i.jsx)(n.code,{children:"validation"}),", ",(0,i.jsx)(n.code,{children:"hover"}),", ",(0,i.jsx)(n.code,{children:"go to definition"}),", but also more advanced ones, such as ",(0,i.jsx)(n.code,{children:"codelens"}),", ",(0,i.jsx)(n.code,{children:"inlay hints"}),", ",(0,i.jsx)(n.code,{children:"quickfixes"}),", ",(0,i.jsx)(n.code,{children:"rename"}),", ",(0,i.jsx)(n.code,{children:"signature help"})," and others."]}),"\n",(0,i.jsxs)(n.p,{children:["Here's a quick example showcasing the ",(0,i.jsx)(n.a,{href:"https://pkg.go.dev/golang.org/x/tools/gopls",children:(0,i.jsx)(n.code,{children:"gopls"})})," language server in action:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Go Demo",src:t(6411).A+"",width:"699",height:"337"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"https://github.com/redhat-developer/lsp4ij/blob/main/docs/LSPSupport.md",children:"LSP Support"})," page provides a complete overview of what LSP4IJ supports and details how it leverages specific IntelliJ extension points. While most features work out-of-the-box, a few ",(0,i.jsx)(n.a,{href:"https://github.com/redhat-developer/lsp4ij/blob/main/docs/DeveloperGuide.md#special-cases",children:"cases"})," require special configuration."]}),"\n",(0,i.jsx)(n.h4,{id:"cancellation-support",children:"Cancellation Support"}),"\n",(0,i.jsxs)(n.p,{children:["In order to avoid using timeouts (that might still freeze the IDE), LSP4IJ implements ",(0,i.jsx)(n.a,{href:"https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#cancelRequest",children:"Cancellation Support"})," to stop LSP requests when the file changes or when the IDE indicates the some requests (e.g. completion) are no longer relevant."]}),"\n",(0,i.jsx)(n.h3,{id:"lsp-consoles-view",children:"LSP consoles view"}),"\n",(0,i.jsxs)(n.p,{children:["Although not often useful to users, the ",(0,i.jsx)(n.a,{href:"https://github.com/redhat-developer/lsp4ij/blob/main/docs/UserGuide.md#lsp-console",children:"LSP consoles view"})," is extremely valuable when one needs to troubleshoot issues with the language servers. All servers can be configured to log traces, as simple or verbose messages. This console view is similar to Visual Studio Code's Output view, only more convenient, as message contents are collapsible:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"LSP console",src:t(7334).A+"",width:"1357",height:"376"})}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(n.p,{children:"LSP4IJ requires at least Java 17 and IntelliJ-based IDEs 2023.2 at the moment."}),"\n",(0,i.jsxs)(n.p,{children:["The LSP4IJ plugin is available in the stable channel of the ",(0,i.jsx)(n.a,{href:"https://plugins.jetbrains.com/plugin/23257-lsp4ij",children:"JetBrains Plugin Repository"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"quickly-get-started-with-lsp4ij",children:"Quickly get started with LSP4IJ"}),"\n",(0,i.jsxs)(n.p,{children:["If you want to ",(0,i.jsx)(n.em,{children:"quickly test your language server with LSP4IJ without having to develop a plugin"})," or ",(0,i.jsx)(n.em,{children:"if you're unfamiliar with IntelliJ plugin development"}),", LSP4IJ offers the possibility of integrating any language server (",(0,i.jsx)(n.strong,{children:"only stdio mode is supported at the moment"}),") with ",(0,i.jsx)(n.a,{href:"https://github.com/redhat-developer/lsp4ij/blob/main/docs/UserDefinedLanguageServer.md",children:"simple settings"})," where you only need to define:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["the language server ",(0,i.jsx)(n.code,{children:"launch command"})]}),"\n",(0,i.jsxs)(n.li,{children:["the ",(0,i.jsx)(n.code,{children:"mapping"})," between the ",(0,i.jsx)(n.code,{children:"language server"})," and the ",(0,i.jsx)(n.code,{children:"files"})," targeted by the language server"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"example-adding-typescript-support",children:"Example: Adding TypeScript support"}),"\n",(0,i.jsxs)(n.p,{children:["Free/community IntelliJ-based IDEs only provide basic support for ",(0,i.jsx)(n.code,{children:"TypeScript"})," in the form of syntax highlighting. In this section, we'll explain step-by-step how to integrate the ",(0,i.jsx)(n.a,{href:"https://github.com/typescript-language-server/typescript-language-server",children:"TypeScript language server"})," into your IntelliJ IDE, without having to develop anything, and immediately benefit from ",(0,i.jsx)(n.code,{children:"TypeScript"}),", ",(0,i.jsx)(n.code,{children:"React"})," and ",(0,i.jsx)(n.code,{children:"JavaScript"})," support (completion, validation, quickfixes, codelens, etc):"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"TypeScriptServerDemo",src:t(7564).A+"",width:"755",height:"358"})}),"\n",(0,i.jsx)(n.h4,{id:"step-1-install-the-language-server",children:"Step 1: Install the language server"}),"\n",(0,i.jsxs)(n.p,{children:["This step describes how to install the language server. In our case, ",(0,i.jsx)(n.code,{children:"typescript-language-server"})," is ",(0,i.jsx)(n.code,{children:"Node.js"})," application and thus requires the ",(0,i.jsx)(n.code,{children:"Node.js"})," runtime to run."]}),"\n",(0,i.jsx)(n.p,{children:"You will need to:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsxs)(n.a,{href:"https://nodejs.org/en/download",children:["Install ",(0,i.jsx)(n.code,{children:"Node.js"})]})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.a,{href:"https://github.com/typescript-language-server/typescript-language-server?tab=readme-ov-file#installing",children:["Install ",(0,i.jsx)(n.code,{children:"typescript-language-server"})]}),". The simplest way is to open a terminal and execute the following command:"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"npm install -g typescript-language-server typescript"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"It will install:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/typescript-language-server/typescript-language-server",children:"TypeScript language server"}),": this project delegates the LSP operations (completion, diagnostics, etc) to the ",(0,i.jsx)(n.code,{children:"tsserver"})," from ",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/TypeScript",children:"TypeScript"})," which doesn't support LSP itself."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/microsoft/TypeScript",children:"TypeScript"})," which includes ",(0,i.jsx)(n.code,{children:"tsserver"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["As the command will add ",(0,i.jsx)(n.code,{children:"typescript-language-server"})," to your OS PATH, you will probably have to close and reopen your IDE for the command to be accessible by LSP4IJ."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"step-2-create-a-language-server-in-lsp4ij",children:"Step 2: Create a language server in LSP4IJ"}),"\n",(0,i.jsxs)(n.p,{children:["In order to create a new ",(0,i.jsx)(n.a,{href:"https://github.com/redhat-developer/lsp4ij/blob/main/docs/UserDefinedLanguageServer.md",children:"User-defined language server"}),", you need to open the ",(0,i.jsx)(n.code,{children:"New Language Server"})," dialog, either:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"from the menu on the right of the LSP console:"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"New Language Server From Console",src:t(6110).A+"",width:"873",height:"348"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["or with the ",(0,i.jsx)(n.code,{children:"[+]"})," on the top of the language server settings:"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"New Language Server From Settings",src:t(3706).A+"",width:"564",height:"455"})}),"\n",(0,i.jsx)(n.p,{children:"Once you clicked on either of them, the dialog will appear:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"New Language Server Dialog",src:t(2366).A+"",width:"798",height:"542"})}),"\n",(0,i.jsxs)(n.p,{children:["To quickly configure TypeScript support, you could use the ",(0,i.jsx)(n.a,{href:"https://github.com/redhat-developer/lsp4ij/blob/main/docs/user-defined-ls/typescript-language-server.md",children:"TypeScript template"})," which will pre-fill all fields (command and mappings), but in order to better understand the process, let's do that manually:"]}),"\n",(0,i.jsx)(n.h5,{id:"define-launch-command",children:"Define launch command"}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.code,{children:"Server"})," tab, set:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Name"})," as ",(0,i.jsx)(n.code,{children:"TypeScript Language Server"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Command"})," as ",(0,i.jsx)(n.code,{children:"typescript-language-server --stdio"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"New Language Server Dialog with TypeScript",src:t(890).A+"",width:"807",height:"536"})}),"\n",(0,i.jsxs)(n.p,{children:["Note that you can use ",(0,i.jsx)(n.a,{href:"https://github.com/redhat-developer/lsp4ij/blob/main/docs/UserDefinedLanguageServer.md#macro-syntax",children:"macros in your commands"}),", to make them more portable, should you choose to ",(0,i.jsx)(n.a,{href:"#Export-server",children:"export you server"}),"."]}),"\n",(0,i.jsx)(n.h5,{id:"define-mappings",children:"Define mappings"}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.code,{children:"Mappings > File name patterns"})," tab, associate ",(0,i.jsx)(n.code,{children:"*.ts"}),", ",(0,i.jsx)(n.code,{children:"*.tsx"}),", ",(0,i.jsx)(n.code,{children:"*.jsx"})," files to the language server as shown below :"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"File Name Pattern"}),(0,i.jsx)(n.th,{children:"Language Id"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*.jsx"}),(0,i.jsx)(n.td,{children:"javascriptreact"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*.ts"}),(0,i.jsx)(n.td,{children:"typescript"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*.tsx"}),(0,i.jsx)(n.td,{children:"typescriptreact"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"File name patterns",src:t(637).A+"",width:"795",height:"522"})}),"\n",(0,i.jsxs)(n.p,{children:["The value in the ",(0,i.jsx)(n.code,{children:"Language Id"})," column must be one of the language identifiers defined in the ",(0,i.jsx)(n.a,{href:"https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#textDocumentItem",children:"LSP specification"}),"."]}),"\n",(0,i.jsx)(n.h5,{id:"define-configuration",children:"Define configuration"}),"\n",(0,i.jsxs)(n.p,{children:["By default, ",(0,i.jsx)(n.code,{children:"codelens"})," and ",(0,i.jsx)(n.code,{children:"inlayhint"})," are not available in the TypeScript Language Server, you can enable them by filling the ",(0,i.jsx)(n.code,{children:"Configuration"})," tab with the following JSON settings:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "typescript": {\n    "inlayHints": {\n      "includeInlayEnumMemberValueHints": true,\n      "includeInlayFunctionLikeReturnTypeHints": true,\n      "includeInlayFunctionParameterTypeHints": true,\n      "includeInlayParameterNameHints": "all",\n      "includeInlayParameterNameHintsWhenArgumentMatchesName": true,\n      "includeInlayPropertyDeclarationTypeHints": true,\n      "includeInlayVariableTypeHints": true,\n      "includeInlayVariableTypeHintsWhenTypeMatchesName": true\n    },\n    "implementationsCodeLens": {\n      "enabled": true\n    },\n    "referencesCodeLens": {\n      "enabled": true,\n      "showOnAllFunctions": true\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"TypeScript Language Server configuration page",src:t(8412).A+"",width:"805",height:"559"})}),"\n",(0,i.jsxs)(n.p,{children:["Click the ",(0,i.jsx)(n.code,{children:"OK"})," button, and you should see the ",(0,i.jsx)(n.code,{children:"TypeScript Language Server"})," in the ",(0,i.jsx)(n.code,{children:"Language Servers"})," view:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"TypeScript Language Server in the console view",src:t(3964).A+"",width:"1166",height:"314"})}),"\n",(0,i.jsxs)(n.p,{children:["Create a ",(0,i.jsx)(n.code,{children:"ts"})," file and open it. The ",(0,i.jsx)(n.code,{children:"TypeScript Language Server"})," should start and you should now be able to use TypeScript support with completion, hover, linting..."]}),"\n",(0,i.jsx)(n.h3,{id:"using-a-template",children:"Using a Template"}),"\n",(0,i.jsxs)(n.p,{children:["LSP4IJ provides ",(0,i.jsx)(n.a,{href:"https://github.com/redhat-developer/lsp4ij/blob/main/docs/UserDefinedLanguageServer.md#using-template",children:"a few templates"})," for various language servers. You can select the ",(0,i.jsx)(n.a,{href:"https://github.com/redhat-developer/lsp4ij/blob/main/docs/user-defined-ls/typescript-language-server.md",children:"TypeScript Language Server"})," template which will pre-fill all fields previously described (server name, command and mappings)."]}),"\n",(0,i.jsx)(n.h3,{id:"export-server",children:"Export server"}),"\n",(0,i.jsxs)(n.p,{children:["If you want to share your language server settings, you can ",(0,i.jsx)(n.a,{href:"https://github.com/redhat-developer/lsp4ij/blob/main/docs/UserDefinedLanguageServer.md#exporting-templates",children:"export it"})," to generate a zip file, that, once shared and unzipped to a directory, can be ",(0,i.jsx)(n.a,{href:"https://github.com/redhat-developer/lsp4ij/blob/main/docs/UserDefinedLanguageServer.md#custom-template",children:"imported"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"how-to-integrate-your-language-server-in-an-intellij-plugin",children:"How to integrate your language server in an IntelliJ plugin."}),"\n",(0,i.jsx)(n.p,{children:"Manually defining a language server via settings allows you to add a language server into IntelliJ in a few minutes, but if you need to provide better integration with the IDE, embedding the language server definition in an IntelliJ plugin will be a better solution:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"it is possible to embed the language server and/or provide a mechanism to download/update the language server, etc. make it easier for users to get started."}),"\n",(0,i.jsx)(n.li,{children:"advanced language servers require implementing specific client-side commands, which is only possible through the development of an IntelliJ plugin."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"https://github.com/redhat-developer/lsp4ij/blob/main/docs/DeveloperGuide.md",children:"Developer Guide"}),"  provides step-by-step instructions for contributing an LSP language server in your IntelliJ plugin."]}),"\n",(0,i.jsxs)(n.p,{children:["The following example shows how to integrate the ",(0,i.jsx)(n.code,{children:"TypeScript Language Server"})," in an IntelliJ plugin. In your plugin.xml, you would declare the server like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:'<extensions defaultExtensionNs="com.redhat.devtools.lsp4ij">\n    <server id="typeScriptLanguageServerId"\n            name="TypeScript Language Server"\n            factoryClass="com.yourplugin.lsp.TypeScriptLanguageServerFactory">\n        <description><![CDATA[\n        Some description written in HTML, that will be displayed in the LSP consoles view and Language Servers settings.\n        ]]>\n        </description>\n    </server>\n</extensions>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["and mappings like this by using ",(0,i.jsx)(n.a,{href:"https://github.com/redhat-developer/lsp4ij/blob/main/docs/DeveloperGuide.md#file-name-pattern-mapping",children:"File name pattern mapping"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:'<extensions defaultExtensionNs="com.redhat.devtools.lsp4ij">\n\n    <fileNamePatternMapping patterns="*.ts"\n                            serverId="typeScriptLanguageServerId"\n                            languageId="typescript"/>\n\n</extensions>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"com.yourplugin.lsp.TypeScriptLanguageServerFactory"})," factory class looks like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"package com.yourplugin.lsp;\n\nimport com.intellij.openapi.project.Project;\nimport com.redhat.devtools.lsp4ij.LanguageServerFactory;\nimport com.redhat.devtools.lsp4ij.client.LanguageClientImpl;\nimport com.redhat.devtools.lsp4ij.server.StreamConnectionProvider;\nimport org.jetbrains.annotations.NotNull;\n\npublic class TypeScriptLanguageServerFactory implements LanguageServerFactory {\n\n    @Override\n    public @NotNull StreamConnectionProvider createConnectionProvider(@NotNull Project project) {\n        return new TypeScriptLanguageServer(project);\n    }\n\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'package com.yourplugin.lsp;\n\nimport com.redhat.devtools.lsp4ij.server.ProcessStreamConnectionProvider;\n\nimport java.util.List;\n\npublic class TypeScriptLanguageServer extends ProcessStreamConnectionProvider {\n\n    public MyLanguageServer() {\n        List<String> commands = List.of("typescript-language-server", "--stdio");\n        super.setCommands(commands);\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["This code assumes ",(0,i.jsx)(n.code,{children:"typescript-language-server"})," is available on the PATH, but it could be improved to target an embedded TypeScript language server inside your IntelliJ plugin."]}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsxs)(n.p,{children:["This article only scratches the surface of what ",(0,i.jsx)(n.code,{children:"LSP4IJ"})," provides. You can find more documentation in:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/redhat-developer/lsp4ij/tree/main/docs/UserGuide.md",children:"the user guide"}),", describing how to use the LSP consoles view and Language Server preferences."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/redhat-developer/lsp4ij/tree/main/docs/LSPSupport.md",children:"the LSP Support overview"}),", detailing which LSP features are implemented, and how."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/redhat-developer/lsp4ij/tree/main/docs/UserDefinedLanguageServer.md",children:"the User-defined language server documentation"}),", explaining how to integrate a language server in LSP4IJ with minimal settings."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/redhat-developer/lsp4ij/tree/main/docs/DeveloperGuide.md",children:"the developer guide"}),", providing step-by-step instructions on how to integrate a language server in LSP4IJ in an external IntelliJ plugin."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Creating a new LSP client for JetBrains-based IDEs has been a very humbling and rewarding experience. With each new language server we tested, we found slightly different behaviors to account for, eventually making LSP4IJ more and more robust.\nThe initial feedback from the community has been very encouraging so far. We hope you will find LSP4IJ useful!"}),"\n",(0,i.jsxs)(n.p,{children:["If you find any bugs or can think of ideas for some great new features, please don\u2019t hesitate to head over to our Github repository and ",(0,i.jsx)(n.a,{href:"https://github.com/redhat-developer/lsp4ij/issues",children:"open a ticket"}),". Since our test framework is built around ",(0,i.jsx)(n.a,{href:"https://github.com/redhat-developer/lsp4ij/blob/main/src/test/java/com/redhat/devtools/lsp4ij/features/completion/GoCompletionTest.java",children:"LSP requests"}),", you just need to copy traces from the LSP Consoles view so we can reproduce issues you find with your language server and fix them."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},6411:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/GoplsDemo-0826d5b88b165166d7cff2f0924eec49.gif"},7334:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/LSPConsole-494158253cd10f8b24dbd3e49a4421d4.png"},2366:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/NewLanguageServerDialogEmpty-ef5aaebff2b14ab16d4471cdc443a4bc.png"},6110:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/NewLanguageServerFromConsole-b82856f8cc14028e0fff03a198ca5697.png"},3706:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/NewLanguageServerFromSettings-4fc2817a810b888ed97ef9cd31f25be5.png"},7564:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/TypeScriptServerDemo-cb555792bf6462f148dae6265e1466d4.gif"},890:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/TypeScriptServerDialog-0a3292d16a8feb97fceaf0a93ff77f1a.png"},637:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/TypeScriptServerDialog_FileNamePatterns-e4be8703e9826aff8fbac9c64f54fc31.png"},8412:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/ts-ls-config-83a1510bd963052e7b535ff0b1f51b9b.png"},3964:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/ts-ls-traces-d1b9901e7325048494e700e8944be54b.png"},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var i=t(6540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);
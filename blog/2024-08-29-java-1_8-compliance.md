---
slug: java-1_8-compliance
title: Dropping support of older Java releases in vscode-java
authors: [rgrunber]
tags: [vscode, java, lsp]
---

A percentage (~4%) of users trying out our latest release of vscode-java [1.33.0](https://github.com/redhat-developer/vscode-java/releases/tag/v1.33.0) were probably disappointed to note that we dropped support for Java versions prior to 1.8. This wasn't something we did intentionally but it happened in the [JDT Core](https://github.com/eclipse-jdt/eclipse.jdt.core) library that we rely on for much of our Java functionality. While losing existing functionality is frustrating, I'll go over why this change was necessary and how it will set up the JDT Core project, the Java language server ([JDT-LS](https://github.com/eclipse-jdtls/eclipse.jdt.ls)), and [vscode-java](https://github.com/redhat-developer/vscode-java) for success in the longer term.


### There's a JEP for that

[JEP-182](https://openjdk.org/jeps/182) already defines a process for this exact thing. Although the policy would have to change to take into account the 6-month release cadence, it's clear that a move towards supporting fewer older releases is desired.

As of now, `javac` from the OpenJDK 22 developments tools no longer support a pre-1.8 source/target/release flag :

```
$ javac --help
  ...
  ...
  --release <release>
        Compile for the specified Java SE release.
        Supported releases:
            8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22
  ...
  ...
```

### Maintenance burden

Going through the discussion ( https://github.com/eclipse-jdt/eclipse.jdt.core/discussions/820 ) in JDT Core to drop the support, it's clear there's a cost to supporting the older versions. It also affects the time it takes to implement new features that must deal with the added complexity from those older versions. Simplifying the codebase will translate into more features, implemented more quickly and an easier maintenance.


### Perspective

So where does that leave affected users ? They could continue to stay on vscode-java [1.32.0](https://github.com/redhat-developer/vscode-java/releases/tag/v1.32.0), until they update their project to Java 1.8 or above. It's definitely not ideal for those depending on older Java versions but the newer features, and improvements should certainly make up for it.
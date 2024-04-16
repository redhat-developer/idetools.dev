import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={styles.leftColumn}>
      <p></p><p></p>
        <h1 styles="padding-top:1em">Language Extensions</h1>
        <span>
        <div className={styles.imgCol}>
          <a href="https://marketplace.visualstudio.com/items?itemName=redhat.java"><img src='img/vscode-java.png' height='128em'></img></a>
          <figcaption position='absolute'><b><a href="https://github.com/redhat-developer/vscode-java">VS Code Java</a></b></figcaption>
        </div>
        <div className={styles.imgCol}>
          <a href="https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml"><img src='img/yaml.png' height='128em'></img></a>
          <figcaption position='absolute'><b><a href="https://github.com/redhat-developer/vscode-yaml">YAML</a></b></figcaption>
        </div>
        </span>
        <span>
        <div className={styles.imgCol}>
          <a href="https://marketplace.visualstudio.com/items?itemName=redhat.vscode-xml"><img src='img/xml.png' height='128em'></img></a>
          <figcaption position='absolute'><b><a href="https://github.com/redhat-developer/vscode-xml">XML</a></b></figcaption>
        </div>
        <div className={styles.imgCol}>
        <a href="https://marketplace.visualstudio.com/items?itemName=redhat.vscode-quarkus"><img src='img/vscode-quarkus.png' height='128em'></img></a>
          <figcaption position='absolute'><b><a href="https://github.com/redhat-developer/vscode-quarkus">VS Code Quarkus</a></b></figcaption>
        </div>
        </span>
        <span>
        <div className={styles.imgColThree}>
        <a href="https://marketplace.visualstudio.com/items?itemName=redhat.vscode-microprofile"><img src='img/vscode-quarkus.png' height='128em'></img></a>
          <figcaption position='absolute'><b><a href="https://github.com/redhat-developer/vscode-microprofile">Microprofile</a></b></figcaption>
        </div>
        <div className={styles.imgColThree}>
          <a href="https://plugins.jetbrains.com/plugin/13234-quarkus-tools"><img src='img/intellij-quarkus.png' height='128em'></img></a>
          <figcaption position='absolute'><b><a href="https://github.com/redhat-developer/intellij-quarkus">Intellij Quarkus</a></b></figcaption>
        </div>
        <div className={styles.imgColThree}>
          <a href="https://plugins.jetbrains.com/plugin/23257-lsp4ij"><img src='img/intellij.png' height='128em'></img></a>
          <figcaption position='absolute'><b><a href="https://github.com/redhat-developer/lsp4ij">LSP4IJ</a></b></figcaption>
          <p></p>
        </div>
        </span>
      </div>
      <div className={styles.rightColumn}>
      <p></p><p></p>
        <h1>Cloud Native Extensions</h1>
        <span>
        <div className={styles.imgCol}>
          <a href="https://marketplace.visualstudio.com/items?itemName=redhat.vscode-openshift-connector"><img src='img/vscode-openshift.png' height='128em'></img></a>
          <figcaption position='absolute'><b><a href="https://github.com/redhat-developer/vscode-openshift-connector">VS Code OpenShift</a></b></figcaption>
        </div>
        <div className={styles.imgCol}>
          <a href="https://plugins.jetbrains.com/plugin/15921-kubernetes-by-red-hat"><img src='img/kubernetes.png' height='128em'></img></a>
          <figcaption position='absolute'><b><a href="https://github.com/redhat-developer/intellij-kubernetes">Intellij Kubernetes</a></b></figcaption>
        </div>
        </span>
        <span>
        <div className={styles.imgCol}>
        <a href="https://plugins.jetbrains.com/plugin/12030-openshift-toolkit-by-red-hat"><img src='img/vscode-openshift.png' height='128em'></img></a>
          <figcaption position='absolute'><b><a href="https://github.com/redhat-developer/intellij-openshift-connector">Intellij OpenShift</a></b></figcaption>
        </div>
        <div className={styles.imgCol}>
          <a href="https://marketplace.visualstudio.com/items?itemName=redhat.vscode-knative"><img src='img/knative.png' height='128em'></img></a>
          <figcaption position='absolute'><b><a href="https://github.com/redhat-developer/vscode-knative">VS Code KNative</a></b></figcaption>
        </div>
        </span>
        <div className={styles.imgCol}>
          <h1>Plus More...</h1>
          <p></p>
          <a href="https://marketplace.visualstudio.com/items?itemName=redhat.vscode-rsp-ui"><img src='img/rsp.png' height='128em'></img></a>
          <figcaption position='absolute'><b><a href="https://github.com/redhat-developer/vscode-rsp-ui">VS Code RSP</a></b></figcaption>
          <p></p>
        </div>
      </div>
    </section>
  );
}

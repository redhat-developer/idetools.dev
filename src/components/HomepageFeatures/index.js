import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <section className={styles.extensionList}>
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
              <figcaption position='absolute'><b><a href="https://github.com/redhat-developer/intellij-kubernetes">IntelliJ Kubernetes</a></b></figcaption>
            </div>
          </span>
          <span>
            <div className={styles.imgCol}>
              <a href="https://plugins.jetbrains.com/plugin/12030-openshift-toolkit-by-red-hat"><img src='img/vscode-openshift.png' height='128em'></img></a>
              <figcaption position='absolute'><b><a href="https://github.com/redhat-developer/intellij-openshift-connector">IntelliJ OpenShift</a></b></figcaption>
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
      <section className={styles.sectionA}>
        <div className={styles.header}>
          <h1>Coding in Java? Take advantage of Visual Studio Code's <a href="https://marketplace.visualstudio.com/items?itemName=redhat.java">most popular Java extension</a></h1>
        </div>
        <div className={styles.col}>
          <img src='img/ErrorsExample.gif'></img>
          <span>
            <h2>Uses Java linting to identify errors</h2>
            <p></p>
          </span>
        </div>
        <div className={styles.col}>
          <img src='img/CodeCompletion.gif'></img>
          <span>
            <h2>Provides code completion with Intellisense</h2>
          </span>
        </div>
        <div className={styles.col}>
          <img src='img/FormattingRefactoring.gif'></img>
          <span>
            <h2>Formats and refactors your code as desired</h2>
          </span>
        </div>
        <div className={styles.col}>
          <img src='img/MavenGradle.gif'></img>
          <span>
            <h2>Offers Maven/Gradle support</h2>
          </span>
        </div>
      </section>
      <section className={styles.sectionB}>
        <div className={styles.header}>
          <h1>Harness the full potential of OpenShift and Kubernetes <a href="https://marketplace.visualstudio.com/items?itemName=redhat.vscode-openshift-connector">directly within VS Code</a></h1>
        </div>
        <div className={styles.col}>
          <img src='img/loginCluster.gif'></img>
          <span>
            <h2>Offers OpenShift cluster provisioning without leaving the IDE</h2>
            <p></p>
          </span>
        </div>
        <div className={styles.col}>
          <img src='img/create-component-demo.gif'></img>
          <span>
            <h2>Allows for easy OpenShift application development</h2>
          </span>
        </div>
      </section>
      <section className={styles.sectionA}>
        <div className={styles.feedbackColOne}>
          <span>
            <h1>We want to hear from you!</h1>
          </span>
          <img width='100%' src='img/RH-Talk_bubble_from_right-minispot-Illustration-Red-2023_10-ryawilli-RGB.Large-square.png'></img>
        </div>
        <div className={styles.feedbackColTwo}>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeX9CZIMIxWr6-SG0Geer0aigLNvRFledGGP4v1lt66oybYsQ/viewform?embedded=true" width="100%" height="100%">Loading…</iframe>
        </div>
      </section>
    </section>
  );
}

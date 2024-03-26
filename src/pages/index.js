import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <span>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://marketplace.visualstudio.com/publishers/redhat">
            <div>
              <img src="/img/visual-studio-code-icon.webp" alt="VSCode Logo"></img>
              VSCode Marketplace
            </div>

          </Link>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://plugins.jetbrains.com/organizations/Red-Hat">
            <div>
            <img src="/img/jetbrains-logo.png" alt="JetBrains Logo"></img>
            Jetbrains Marketplace
            </div>

          </Link>
        </div>
      </div>
      </span>
      <div>
        <img src="/img/RHD-logo-old.png" alt="Red Hat Developer Logo"></img>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

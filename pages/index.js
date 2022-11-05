import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I'm Bryon. I'm a software engineer and IT professional </p>
        <p>
          Take a look at my code{' '}
          <a href='https://github.com/BryonVerdone'>here</a>
        </p>
      </section>
    </Layout>
  );
}

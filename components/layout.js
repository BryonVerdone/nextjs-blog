import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Logo from '../public/images/Bryon Logo.svg';
const name = 'Bryon Verdone';
export const siteTitle = 'Bryon Verdone';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Learn how to build a personal website using Next.js'
        />
        <meta
          property='og:image'
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src={Logo}
              className={utilStyles.borderCircle}
              height={300}
              width={500}
              alt=''
            />
            {/* <h1 className={utilStyles.headingLg}>{name}</h1> */}
            {/* <Nav /> */}
          </>
        ) : (
          <>
            <Link href='/'>
              <Image
                priority
                src={Logo}
                className={utilStyles.borderCircle}
                height={100}
                width={500}
                alt=''
              />
            </Link>
            {/* <h2 className={utilStyles.headingLg}> */}
            {/* <Link href='/' className={utilStyles.colorInherit}>
                {name}
              </Link> */}
            {/* {name} */}
            {/* </h2> */}
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href='/'>← Back to home</Link>
        </div>
      )}
    </div>
  );
}

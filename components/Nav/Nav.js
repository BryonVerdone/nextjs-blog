import React from 'react';
import styles from './nav.module.css';
import Link from 'next/link';
const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <Link className='text-secondary' href={'/'}>
        Home
      </Link>
      <Link className='text-secondary' href={'/about-me'}>
        About Me
      </Link>
      <Link className='text-secondary' href={'/projects'}>
        Projects
      </Link>
    </nav>
  );
};

export default Nav;

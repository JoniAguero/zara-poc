import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image src="/images/marvel_logo.png" alt="logo" width={130} height={52} />
      </Link>
      <Link href="/about">About</Link>
    </header>
  );
};

export default Header;

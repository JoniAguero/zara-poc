import styles from './Header.module.css';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HeartIcon } from '@/components';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image src="/images/marvel_logo.png" alt="logo" width={130} height={52} />
      </Link>
      <Link href="/about">
        <div className={styles.containerIcon}>
          <div className={styles.icon}>
            <HeartIcon />
          </div>
          <div>3</div>
        </div>
      </Link>
    </header>
  );
};

'use client';

import styles from './Header.module.css';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HeartIcon } from '@/components';
import { useFavorites } from '@/context';

export const Header: React.FC = () => {
  const { favorites } = useFavorites();

  return (
    <header className={styles.header}>
      <Link href="/">
        <Image src="/images/marvel_logo.png" alt="logo" width={130} height={52} priority />
      </Link>
      <Link href="/about">
        <div className={styles.containerIcon}>
          <div className={styles.icon}>
            <HeartIcon />
          </div>
          <div className={styles.numberFavs}>{favorites.length}</div>
        </div>
      </Link>
    </header>
  );
};

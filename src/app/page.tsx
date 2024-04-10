'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/heroes');
  }, [router]);

  return null;
};

export default Page;

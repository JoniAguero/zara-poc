import { generateHash } from '@/utils/generateHash';

export const PublicFetcher = async ({ baseUrl }) => {
  const timestamp = new Date().getTime().toString();

  const hash = generateHash({
    timestamp,
    publicKey: process.env.NEXT_PUBLIC_APIKEY_MARVEL,
    privateKey: process.env.NEXT_PUBLIC_PRIVATEKEY_MARVEL,
  });

  let queryAuth = `ts=${timestamp}&apikey=${process.env.NEXT_PUBLIC_APIKEY_MARVEL}&hash=${hash}`;

  const url = baseUrl + queryAuth;

  try {
    const res = await fetch(url);

    if (!res.code === 200) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  } catch (error) {
    console.error('< public fetcher - ERROR', error);
  }
};

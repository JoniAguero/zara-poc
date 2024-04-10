import { generateHash } from '@/utils/generateHash';

export const PublicFetcher = async ({ search, id }) => {
  console.log('PublicFetcher - search:', search);
  console.log('PublicFetcher - id:', id);

  const timestamp = new Date().getTime().toString();

  const hash = generateHash({
    timestamp,
    publicKey: process.env.NEXT_PUBLIC_APIKEY_MARVEL,
    privateKey: process.env.NEXT_PUBLIC_PRIVATEKEY_MARVEL,
  });

  let url;
  let baseUrl = 'https://gateway.marvel.com/v1/public/characters';
  let query = `?limit=50&ts=${timestamp}&apikey=${process.env.NEXT_PUBLIC_APIKEY_MARVEL}&hash=${hash}`;

  if (id) {
    baseUrl = baseUrl + `/${id}`;
  }

  url = baseUrl + query;

  if (search) {
    url = url + `&name=${encodeURIComponent(search)}`;
  }

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

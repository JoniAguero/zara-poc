import MD5 from 'crypto-js/md5';

function generateHash({ timestamp, privateKey, publicKey }) {
  const hash = MD5(timestamp + privateKey + publicKey).toString();
  return hash;
}

export const PublicFetcher = async ({ search }) => {
  let url;
  const timestamp = new Date().getTime().toString();

  const hash = generateHash({
    timestamp,
    publicKey: process.env.NEXT_PUBLIC_APIKEY_MARVEL,
    privateKey: process.env.NEXT_PUBLIC_PRIVATEKEY_MARVEL,
  });

  const baseUrl = 'https://gateway.marvel.com/v1/public/characters';
  const query = `?limit=50&ts=${timestamp}&apikey=${process.env.NEXT_PUBLIC_APIKEY_MARVEL}&hash=${hash}`;

  url = baseUrl + query;

  if (search) {
    url = url + `&nameStartsWith=${encodeURIComponent(search)}`;
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

export const PublicFetcher = async (url, variables = null) => {
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

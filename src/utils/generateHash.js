import MD5 from 'crypto-js/md5';

export const generateHash = ({ timestamp, privateKey, publicKey }) => {
  const hash = MD5(timestamp + privateKey + publicKey).toString();
  return hash;
};

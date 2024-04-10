import { NextPage } from 'next';

const Error500: NextPage = () => {
  return (
    <div>
      <h1>500 - Internal Server Error</h1>
      <p>Oops! Something went wrong on the server.</p>
    </div>
  );
};

export default Error500;

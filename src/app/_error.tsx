import React from 'react';
import { NextPageContext } from 'next';

interface ErrorProps {
  statusCode?: number;
}

type GetInitialProps = (ctx: NextPageContext) => Promise<{ [key: string]: any }>;

const Error: React.FC<ErrorProps> & { getInitialProps?: GetInitialProps } = ({ statusCode }) => {
  return (
    <div>
      {statusCode ? <p>An error {statusCode} occurred on the server</p> : <p>An error occurred on the client</p>}
    </div>
  );
};

Error.getInitialProps = async ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;

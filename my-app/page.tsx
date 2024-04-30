import React from 'react';
import { AppProps } from 'next/app';
import { AuthProvider } from './authContext';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <React.Fragment>
        <Component {...pageProps} />
      </React.Fragment>
    </AuthProvider>
  );
}

export default MyApp;

import '@/styles/global.css';

import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

const App = ({ Component, pageProps }: AppProps) => {
  // if (process.env.NODE_ENV === 'development') {
  import('../mocks');
  // }
  return (
    <>
      <DefaultSeo />
      <Component {...pageProps} />
    </>
  );
};

export default App;

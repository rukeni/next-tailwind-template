import '@/styles/global.css';

import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo />
      <Component {...pageProps} />
    </>
  );
};

export default App;

import 'tailwindcss/tailwind.css';

import type { AppProps } from 'next/app';

type MyAppProps<P = any> = {
  pageProps: P;
} & Omit<AppProps<P>, 'pageProps'>;

function MyApp({ Component, pageProps }: MyAppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

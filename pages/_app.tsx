// pages/_app.tsx
import { AppProps } from 'next/app';  // Import AppProps type from Next.js
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

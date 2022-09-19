// `pages/_app.js`
import { AppProps, NextWebVitalsMetric } from 'next/app'
import '../styles/global.css';

// This file will load on every page as the root
// Changing this file requires restarting the dev server
// This will allow us to use global css (can be named anything but should be imported here))

export const reportWebVitals = (metric: NextWebVitalsMetric) =>{
  console.log(metric);
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
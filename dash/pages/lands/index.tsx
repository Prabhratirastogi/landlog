import type { AppProps } from 'next/app'
import BaseLayout from '../../Components/Layout/BaseLayout';
import Head from 'next/head';

function About({ Component, pageProps }: AppProps) {  
  return (
  <BaseLayout>
    <Head>
      <title>LandLog | About</title>
      <meta name="description" content="View all your land on a central dashboard." />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="bg-red-200 w-full h-full">
      ff
    </div>
  </BaseLayout>
  );
}

export default About;
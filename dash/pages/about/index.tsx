import type { AppProps } from 'next/app'
import { DatePicker } from 'antd';
import BaseLayout from '../../Components/BaseLayout';
import Head from 'next/head';

function About({ Component, pageProps }: AppProps) {  
  return (
  <BaseLayout>
    <Head>
      <title>LandLog | About</title>
      <meta name="description" content="View all your land on a central dashboard." />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <DatePicker />
  </BaseLayout>
  );
}

export default About;
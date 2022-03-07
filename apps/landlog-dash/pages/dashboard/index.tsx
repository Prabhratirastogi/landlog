import type { AppProps } from 'next/app';
import { Card, Space } from 'antd';
import BaseLayout from '../../component/navbar/BaseLayout';
import Head from 'next/head';
import { Button } from 'ui';

function Dashboard({ Component, pageProps }: AppProps) {
  return (
    <BaseLayout>
      <Head>
        <title>LandLog | Dashboard</title>
        <meta name="description" content="View all your land on a central dashboard." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <div>Apple</div>
    </BaseLayout>
  );
}

export default Dashboard;

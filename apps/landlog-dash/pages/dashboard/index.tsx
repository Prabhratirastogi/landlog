import type { AppProps } from 'next/app';
import { DatePicker, Card, Space } from 'antd';
import BaseLayout from '../../component/BaseLayout';
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

      <Space direction="horizontal">
        <Card title="Card" style={{ width: 300 }}>
          <p>Card content</p>
          <Button />
        </Card>
        <Card title="Card" style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Space>
    </BaseLayout>
  );
}

export default Dashboard;

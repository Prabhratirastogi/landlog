import type { AppProps } from 'next/app'
import { DatePicker, Card, Space } from 'antd';
import BaseLayout from '../../Components/Layout/BaseLayout';
import Head from 'next/head';

function Settings({ Component, pageProps }: AppProps) {  
  return (
  <BaseLayout>
    <Head>
      <title>LandLog | Settings</title>
      <meta name="description" content="View all your land on a central dashboard." />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <Space direction="horizontal">  
      <Card title="Card" style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
      <Card title="Card" style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </Space>
  </BaseLayout>
  );
}

export default Settings;
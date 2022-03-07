import type { AppProps } from 'next/app';
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

      <div className="p-4 pt-8 bg-slate-50 flex flex-col">
        <div className="max-w-md place-self-center">
          <h1 className='text-md text-slate-500'>Preferences</h1>
        </div>
      </div>
    </BaseLayout>
  );
}

export default Dashboard;

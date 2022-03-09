import type { AppProps } from 'next/app';
import { AppLayout } from '../../component/AppLayout';
import Head from 'next/head';

function Dashboard({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Head>
        <title>LandLog | Dashboard</title>
        <meta name="description" content="View all your land on a central dashboard." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="p-4 pt-8 bg-slate-50 flex flex-col">
        <div className="max-w-md place-self-center">
          <h1 className="text-md text-slate-500">Preferences</h1>
        </div>
      </div>
    </AppLayout>
  );
}

export default Dashboard;

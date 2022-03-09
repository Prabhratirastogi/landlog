import type { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AppLayout } from '../../component/AppLayout';

function About({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <AppLayout>
      <Head>
        <title>LandLog | Land {id}</title>
        <meta name="description" content="View all your land on a central dashboard." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="p-2 bg-blue-50 w-full flex flex-col">
        <span className="text-sm m-2 pl-4 text-slate-400 bg-sky-100 p-2 rounded-xl">
          <span className="hover:text-sky-600">
            <Link href="/">Land</Link>
          </span>
          <span className="text-slate-300"> / </span>
          <span className="hover:text-sky-600">
            <Link href={`/land/${id}`}>{`Land ${id}`}</Link>
          </span>
        </span>
        <div className="max-w-md w-max bg-slate-50 place-self-center">hello</div>
      </div>
    </AppLayout>
  );
}

export default About;

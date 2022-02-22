import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>LandLog</title>
        <meta name="description" content="View all your land on a central dashboard." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}

export default Home;
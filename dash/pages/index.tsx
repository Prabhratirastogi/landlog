import type { NextPage } from 'next';
import Head from 'next/head';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import * as mapboxconf from '../Components/mapbox.config';
import BaseLayout from '../Components/Layout/BaseLayout';
import Map from 'react-map-gl';
import { Content } from 'antd/lib/layout/layout';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>LandLog | Home</title>
        <meta name="description" content="View all your land on a central dashboard." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <BaseLayout>
    <Content>
      <Map
      initialViewState={{
        longitude: 82.74,
        latitude: 24.78,
        zoom: 6.29
      }}
      style={{width: "100vw", height: "100vh", top: 0, position: "absolute", zIndex: -10, overflow: "hidden"}}
      mapStyle={ mapboxconf.MapStyles.minimal }
      mapboxAccessToken={ mapboxconf.PublicAccessToken }
    />
      </Content> 
  </BaseLayout>
    </div>
  )
}

export default Home;
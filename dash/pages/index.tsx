import type { NextPage } from 'next';
import Head from 'next/head';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import * as mapboxconf from '../Components/mapbox.config';
import BaseLayout from '../Components/BaseLayout';
import Map from 'react-map-gl';
import { useStore } from '../store';
import { Transition } from '@headlessui/react';

const Home: NextPage = () => {
  const isDrawerOpen = useStore(state => state.isDrawerOpen);

  return (
    <BaseLayout>
      <Head>
        <title>LandLog | Home</title>
        <meta name="description" content="View all your land on a central dashboard." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='w-screen h-screen absolute overflow-hidden inset-0 pointer-events-none'>
      <Map
        initialViewState={{
          longitude: 82.74,
          latitude: 24.78,
          zoom: 6.29
        }}
        style={{ top: 0, position: "absolute", zIndex: -10 }}
        mapStyle={ mapboxconf.MapStyles.minimal }
        mapboxAccessToken={ mapboxconf.PublicAccessToken }
        />
        <Transition 
          show={isDrawerOpen} 
          className="h-4/5"
          enter="transition-transform duration-50 transform-gpu ease-out"
          enterFrom='-translate-x-20'
          enterTo='translate-x-0'
          leave='transition-transform duration-50 transform-gpu ease-out'
          leaveFrom='translate-x-0'
          leaveTo='-translate-x-20'
        >
          <div className='bg-blue-100/60 w-60 h-full shadow-2xl backdrop-blur rounded-xl mt-14 m-2 p-4 ring-1 ring-blue-200'>dd</div>
        </Transition>
      </div>
    </BaseLayout>
  )
}

export default Home;
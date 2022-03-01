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
          <div className='bg-blue-100/60 w-60 h-full shadow-2xl backdrop-blur rounded-xl mt-14 m-2 ring-1 ring-blue-200 overflow-x-hidden overflow-y-scroll'>
          <div className='flex p-4 bg-slate-100/50'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-400 place-self-center mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div className='flex flex-col flex-grow'>
              <span className='capitalize text-sky-500'>sambodhi retreat</span>
              <span className='capitalize text-xs text-slate-400'>gaya, bihar</span>
            </div>
            <div className='place-self-center text-sky-300 bg-slate-200 rounded-xl p-2'>
              16
            </div>
          </div>
        </div>
        </Transition>
      </div>
    </BaseLayout>
  )
}

export default Home;
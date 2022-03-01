import type { NextPage } from 'next';
import Head from 'next/head';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import * as mapboxconf from '../Components/mapbox.config';
import BaseLayout from '../Components/BaseLayout';
import Map from 'react-map-gl';
import { useStore } from '../store';
import { Transition } from '@headlessui/react';

interface LandInfo {
  name: string;
  location: { city: string, state: string };
  count: number;
};

const lands: LandInfo[] = [
  { name: "sambodhi retreat", location: { city: "patna", state: "bihar" }, count: 33 },
  { name: "branch 1", location: { city: "gaya", state: "bihar" }, count: 1 },
  { name: "branch 2", location: { city: "gaya", state: "bihar" }, count: 23 },
  { name: "branch 3", location: { city: "gaya", state: "bihar" }, count: 65 },
  { name: "branch 1", location: { city: "patna", state: "bihar" }, count: 92 },
  { name: "branch 2", location: { city: "patna", state: "bihar" }, count: 8 },
  { name: "branch 3", location: { city: "patna", state: "bihar" }, count: 1 },
].sort((a, b) => b.count - a.count);

const LandItem = ({ name, location, count }: LandInfo) => {
  return (
    <div className='flex p-4 bg-slate-100/40 shadow-inner'>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-400 place-self-center mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      <div className='flex flex-col flex-grow'>
        <span className='capitalize text-sky-500'>{ name }</span>
        <span className='capitalize text-xs text-slate-400'>{ location.city }, {location.state}</span>
      </div>
      <span className='place-self-center text-sky-400 bg-sky-100 rounded-full p-2 text-xs shadow-inner'>
        {count}
      </span>
    </div>
  );
}

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
          <div className='bg-blue-100/60 w-64 h-full shadow-2xl backdrop-blur rounded-2xl mt-14 m-2 ring-1 ring-blue-300 overflow-x-hidden divide-y divide-blue-200'>
            { lands.map(
              (land, index) => (
                <LandItem 
                  name={land.name} 
                  location={ {city: land.location.city, state: land.location.state } } 
                  count={land.count}
                  key={index}
                /> 
            ))
            }
        </div>
        </Transition>
      </div>
    </BaseLayout>
  )
}

export default Home;
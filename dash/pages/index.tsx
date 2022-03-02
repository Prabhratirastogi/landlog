import type { NextPage } from 'next';
import Head from 'next/head';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import * as mapboxconf from '../Components/mapbox.config';
import BaseLayout from '../Components/BaseLayout';
import Map from 'react-map-gl';
import { useStore } from '../store';
import { Transition } from '@headlessui/react';
import { LandInfo, LandItem } from '../Components/LandItem';
import { classNames } from '../utilities/classNames';
import { useState } from 'react';
import { FilterPane, states_type } from '../Components/FilterPane';
import { LandDetails } from '../Components/LandDetails';

const lands: LandInfo[] = [
  { name: "sambodhi retreat", location: { city: "patna", state: "bihar" }, count: 33 },
  { name: "branch 1", location: { city: "gaya", state: "bihar" }, count: 1 },
  { name: "branch 2", location: { city: "gaya", state: "bihar" }, count: 23 },
  { name: "branch 3", location: { city: "gaya", state: "bihar" }, count: 65 },
  { name: "branch 1", location: { city: "patna", state: "bihar" }, count: 92 },
  { name: "branch 2", location: { city: "patna", state: "bihar" }, count: 8 },
  { name: "branch 3", location: { city: "patna", state: "bihar" }, count: 1 },  
  { name: "branch 1", location: { city: "patna", state: "bihar" }, count: 92 },
  { name: "branch 2", location: { city: "patna", state: "bihar" }, count: 8 },
  { name: "branch 3", location: { city: "patna", state: "bihar" }, count: 1 },  
  { name: "branch 3", location: { city: "gaya", state: "bihar" }, count: 65 },
  { name: "branch 1", location: { city: "patna", state: "bihar" }, count: 92 },
  { name: "branch 2", location: { city: "patna", state: "bihar" }, count: 8 },
  { name: "branch 3", location: { city: "patna", state: "bihar" }, count: 1 },  
  { name: "branch 1", location: { city: "patna", state: "bihar" }, count: 92 },
  { name: "branch 2", location: { city: "patna", state: "bihar" }, count: 8 },
  { name: "branch 3", location: { city: "patna", state: "bihar" }, count: 1 },
].sort((a, b) => b.count - a.count);

const Home: NextPage = () => {
  const isDrawerOpen = useStore(state => state.isDrawerOpen);
  const [filter, useFilter] = useState<states_type>('all');

  return (
    <>
    <Map
      initialViewState={{
        longitude: 82.74,
        latitude: 24.78,
        zoom: 6.29
      }}
      style={{ top: 0, position: "absolute", zIndex: -10, overflow: "hidden" }}
      mapStyle={ mapboxconf.MapStyles.minimal }
      mapboxAccessToken={ mapboxconf.PublicAccessToken }
    />
    <BaseLayout>
      <Head>
        <title>LandLog | Home</title>
        <meta name="description" content="View all your land on a central dashboard." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Transition 
        show={isDrawerOpen} 
        className="w-full h-96 my-2 mx-4 rounded-2xl flex"
        enter="transition-transform transform-gpu ease-out"
        enterFrom='-translate-y-3'
        enterTo='transalte-y-0'
        leave='transition-transform transform-gpu ease-out'
        leaveFrom='translate-y-0'
        leaveTo='-translate-y-3'
      >
        <div className='h-full w-64 rounded-2xl cursor-default overflow-x-hidden ring-1 ring-blue-200 shadow-2xl'>
          <FilterPane />
          <div className='w-64 h-full overflow-y-scroll'>
            <div className='bg-blue-100 divide-y divide-blue-200'>
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
          </div>
        </div>
        <LandDetails />
      </Transition>
    </BaseLayout>
    </>
  )
}

export default Home;
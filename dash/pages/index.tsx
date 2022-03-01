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
        className="ring-1 ring-blue-200 w-64 h-96 m-2 rounded-2xl shadow-2xl"
        enter="transition-transform duration-50 transform-gpu ease-out"
        enterFrom='-translate-x-20'
        enterTo='translate-x-0'
        leave='transition-transform duration-50 transform-gpu ease-in'
        leaveFrom='translate-x-0'
        leaveTo='-translate-x-20'
      >
      <div className='w-full h-full overflow-y-scroll overflow-x-hidden rounded-2xl cursor-default'>
        <FilterPane />
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
      </Transition>
    </BaseLayout>
    </>
  )
}

export default Home;
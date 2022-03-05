import type { NextPage } from 'next';
import Head from 'next/head';
import { Transition } from '@headlessui/react';
import Map from 'react-map-gl';
import * as mapboxconf from '../component/mapbox.config';
import 'mapbox-gl/dist/mapbox-gl.css';

import { useStore } from '../store';
import BaseLayout from '../component/navbar/BaseLayout';
import LandsMenu from '../component/landsmenu';

const Home: NextPage = () => {
  const isDrawerOpen = useStore((state) => state.isDrawerOpen);

  return (
    <>
      <Map
        initialViewState={{
          longitude: 82.74,
          latitude: 24.78,
          zoom: 6.29,
        }}
        style={{
          top: 0,
          position: 'absolute',
          zIndex: 0,
          overflow: 'hidden',
        }}
        mapStyle={mapboxconf.MapStyles.minimal}
        mapboxAccessToken={mapboxconf.PublicAccessToken}
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
          enterFrom="-translate-y-3"
          enterTo="transalte-y-0"
          leave="transition-transform transform-gpu ease-out"
          leaveFrom="translate-y-0"
          leaveTo="-translate-y-3"
        >
          <LandsMenu />
        </Transition>
      </BaseLayout>
    </>
  );
};

export default Home;

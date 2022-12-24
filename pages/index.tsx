import type { NextPage } from 'next';
import nookies from "nookies";
import { firebaseAdmin } from '../lib/firebaseAdmin';
import {firebaseClient} from '../lib/firebaseClient';

import { InferGetServerSidePropsType, GetServerSidePropsContext } from "next";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthUserContext';
import Head from 'next/head';
import { Transition } from '@headlessui/react';
import Map, { Source, Marker } from 'react-map-gl';
import * as mapboxconf from '../component/mapbox.config';
import 'mapbox-gl/dist/mapbox-gl.css';

import { useStore } from '../store';
import { AppLayout } from '../component/AppLayout';
import LandsMenu from '../component/menu';
import { LocationMarkerIcon } from '@heroicons/react/solid';

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
    try {
      const cookies = nookies.get(ctx);
      const token = await firebaseAdmin.auth().verifyIdToken(cookies.token);
      const { uid, email } = token;
  
      // the user is authenticated!
      // FETCH STUFF HERE
   
  
      return {
        props: { message: `Your email is ${email} and your UID is ${uid}.` },
      };
    } catch (err) {
      // either the `token` cookie didn't exist
      // or token verification failed
      // either way: redirect to the login page
      // either the `token` cookie didn't exist
      // or token verification failed
      // either way: redirect to the login page
      return {
        redirect: {
          permanent: false,
          destination: "/login",
        },
        // `as never` is required for correct type inference
        // by InferGetServerSidePropsType below
        props: {} as never,
      };
    }
  };
  

const geojson: GeoJSON.FeatureCollection = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            geometry: { type: 'Point', coordinates: [83, 24.8] },
            properties: null,
        },
        {
            type: 'Feature',
            geometry: { type: 'Point', coordinates: [82, 24.9] },
            properties: null,
        },
        {
            type: 'Feature',
            geometry: { type: 'Point', coordinates: [81, 24.7] },
            properties: null,
        },
        {
            type: 'Feature',
            geometry: { type: 'Point', coordinates: [80, 24.6] },
            properties: null,
        },
    ],
};

const Home = ( props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const router = useRouter();
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
            >
                <Source id="my-data" type="geojson" data={geojson}>
                    {geojson.features.map((location: GeoJSON.Feature, index) => {
                        const point = location.geometry as GeoJSON.Point;

                        return (
                            <Marker
                                longitude={point.coordinates[0]}
                                latitude={point.coordinates[1]}
                                anchor="bottom"
                                onClick={(e) => console.log(location.geometry)}
                                key={index}
                            >
                                <LocationMarkerIcon className="h-6 text-sky-400 hover:text-sky-800" />
                            </Marker>
                        );
                    })}
                </Source>
            </Map>

            <AppLayout>
                <Head>
                    <title>LandLog | Home</title>
                    <meta name="description" content="View all your land on a central dashboard." />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <Transition
                    show={isDrawerOpen}
                    className="w-full h-96 my-2 mx-4 rounded-2xl flex z-100 absolute"
                    enter="transition-transform transform-gpu ease-out"
                    enterFrom="-translate-y-3"
                    enterTo="transalte-y-0"
                    leave="transition-transform transform-gpu ease-out"
                    leaveFrom="translate-y-0"
                    leaveTo="-translate-y-3"
                >
                    <LandsMenu />
                </Transition>
            </AppLayout>
        </>
    );
};

export default Home;

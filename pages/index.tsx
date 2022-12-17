import type { NextPage } from 'next';
import {useEffect} from 'react';
import initFirebase from '../firebase'
import { useRouter } from 'next/router';
import {onAuthStateChanged} from 'firebase/auth';
// import { useAuth } from './context/AuthUserContext';
import Head from 'next/head';
import { Transition } from '@headlessui/react';
import Map, { Source, Marker } from 'react-map-gl';
import * as mapboxconf from '../component/mapbox.config';
import 'mapbox-gl/dist/mapbox-gl.css';

import { useStore } from '../store';
import { AppLayout } from '../component/AppLayout';
import LandsMenu from '../component/menu';
import { LocationMarkerIcon } from '@heroicons/react/solid';

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

const Home: NextPage = () => {
    const isDrawerOpen = useStore((state) => state.isDrawerOpen);
    // const{authUser,loading} = useAuth();
    const router = useRouter();

    useEffect(() => {
      const auth = initFirebase;
      return () => {
        onAuthStateChanged(auth,(user) => {
            if(user){
                console.log("the user is logged in: ",user)
            }else{
                console.log("the user is not signed ")
                router.push("/login")
            }
        })
      }
    }, [])
    
    return (
        <>
            <Map
                initialViewState={ {
                    longitude: 82.74,
                    latitude: 24.78,
                    zoom: 6.29,
                } }
                style={ {
                    top: 0,
                    position: 'absolute',
                    zIndex: 0,
                    overflow: 'hidden',
                } }
                mapStyle={ mapboxconf.MapStyles.minimal }
                mapboxAccessToken={ mapboxconf.PublicAccessToken }
            >
                <Source id="my-data" type="geojson" data={ geojson }>
                    { geojson.features.map((location: GeoJSON.Feature, index) => {
                        const point = location.geometry as GeoJSON.Point;

                        return (
                            <Marker
                                longitude={ point.coordinates[0] }
                                latitude={ point.coordinates[1] }
                                anchor="bottom"
                                onClick={ (e) => console.log(location.geometry) }
                                key={ index }
                            >
                                <LocationMarkerIcon className="h-6 text-sky-400 hover:text-sky-800" />
                            </Marker>
                        );
                    }) }
                </Source>
            </Map>

            <AppLayout>
                <Head>
                    <title>LandLog | Home</title>
                    <meta name="description" content="View all your land on a central dashboard." />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <Transition
                    show={ isDrawerOpen }
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

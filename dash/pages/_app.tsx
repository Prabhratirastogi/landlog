import '../styles/globals.css';
import type { AppProps } from 'next/app'
import Map from 'react-map-gl';
import Login from '../Components/Login';
import NavBar from '../Components/NavBar';
import * as mapboxconf from '../Components/mapbox.config';
import { useStore } from '../store';

function MyApp({ Component, pageProps }: AppProps) {
  const signedIn = useStore(state => state.signedIn);
  
  return (
  <div className='bg-white'>
    { signedIn ? 
    <>
    <NavBar /> 
    <Map
      initialViewState={{
        longitude: 82.74,
        latitude: 24.78,
        zoom: 6.29
      }}
      style={{width: "100vw", height: "100vh", top: 0, position: "absolute", zIndex: -10}}
      mapStyle={ mapboxconf.MapStyles.minimal }
      mapboxAccessToken={ mapboxconf.PublicAccessToken }
    />
    </> : <Login /> }
    </div>
  );
}

export default MyApp

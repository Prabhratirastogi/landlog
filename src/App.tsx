import React from 'react';
import Map from 'react-map-gl';
import Login from './Components/Login';
import NavBar from './Components/NavBar';
import * as mapboxconf from './mapbox.config';
import { useStore } from './Components/store';

const App: React.FC = () => {
  const signedIn = useStore(state => state.signedIn);

  return (
    // TODO: NavBar: https://tailwindui.com/components/application-ui/navigation/navbars#component-ac4ed72c2e03976dc5415ce711fe2f78
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
  )
}

export default App;
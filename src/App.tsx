import React from 'react';
import Map from 'react-map-gl';
import Menubar from './Components/NavBar';
import * as mapboxconf from './mapbox.config';

const App: React.FC = () => {
  return (
    // TODO: NavBar: https://tailwindui.com/components/application-ui/navigation/navbars#component-ac4ed72c2e03976dc5415ce711fe2f78
    <div>
      <Menubar />
      <Map
      initialViewState={{
        longitude: 82.74,
        latitude: 24.78,
        zoom: 6.29
      }}
      style={{width: "100vw", height: "100vh"}}
      mapStyle={ mapboxconf.MapStyles.minimal }
      mapboxAccessToken={ mapboxconf.PublicAccessToken }
    />
    </div>
  )
}

export default App;
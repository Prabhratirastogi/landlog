import React from 'react';
import Map from './Components/Map';
import Menubar from './Components/NavBar';

const App: React.FC = () => {
  return (
    // TODO: NavBar: https://tailwindui.com/components/application-ui/navigation/navbars#component-ac4ed72c2e03976dc5415ce711fe2f78
    <div>
      <Menubar />
      <Map />
    </div>
  )
}

export default App;
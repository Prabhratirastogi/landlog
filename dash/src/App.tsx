import React from 'react';
import Map from './Components/Map';

const App: React.FC = () => {
  return (
    // TODO: NavBar: https://tailwindui.com/components/application-ui/navigation/navbars#component-ac4ed72c2e03976dc5415ce711fe2f78
    <div className="App">
      <input className="bg-white focus:outline-none focus:shadow-outline border border-black rounded-lg py-2 px-4 block appearance-none leading-normal m-10" type="email" placeholder="jane@example.com" />
    <Map />
    </div>
  )
}

export default App;
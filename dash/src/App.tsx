import React from 'react';
import Map from './Components/Map';

const App: React.FC = () => {
  return (
    // TODO: NavBar: https://tailwindui.com/components/application-ui/navigation/navbars#component-ac4ed72c2e03976dc5415ce711fe2f78
    <div>
      <input className='h-100 bg-slate-400 z-90' placeholder='hhhh'/>
      <Map />
    </div>
  )
}

export default App;
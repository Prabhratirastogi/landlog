import React, { useRef, useEffect, useState } from 'react';
import * as mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

const MapboxAccessToken = 'pk.eyJ1Ijoic2F0eWFtdGl3YXJ5IiwiYSI6ImNrenU5MnNxbTF3cHcyeHBlMTNjZHdlZ2QifQ.LUE5I5Md3DL5yAs0_OUL5A';
const tcrMapStyles = {
  minimal: 'mapbox://styles/satyamtiwary/ckzuas3ja000914rx8z59er8a',
  utility: 'mapbox://styles/satyamtiwary/ckzuyq6st000215ko60wcm7kj'
};

// Set Access Token for Mapbox
(mapboxgl as any).accessToken = MapboxAccessToken;

const Map: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef(null);
  const [lng, setLng] = useState(82.74);
  const [lat, setLat] = useState(24.78);
  const [zoom, setZoom] = useState(6.29);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    (map.current as any) = new mapboxgl.Map({
      container: mapContainer.current as HTMLDivElement,
      style: tcrMapStyles.minimal,
      center: [lng, lat],
      zoom: zoom
    });
  });

  return(
    // TODO: Map: https://docs.mapbox.com/help/tutorials/use-mapbox-gl-js-with-react/
    <div ref={mapContainer} className="absolute inset-y-0 h-screen w-screen -z-10" />
  )
}

export default Map;

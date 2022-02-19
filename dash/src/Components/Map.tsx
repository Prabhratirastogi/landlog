import React, { useRef, useEffect, useState } from 'react';
import * as mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

// Set Access Token for Mapbox
(mapboxgl as any).accessToken ='pk.eyJ1Ijoic2F0eWFtdGl3YXJ5IiwiYSI6ImNrenU5MnNxbTF3cHcyeHBlMTNjZHdlZ2QifQ.LUE5I5Md3DL5yAs0_OUL5A';

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
      style: 'mapbox://styles/satyamtiwary/ckzuas3ja000914rx8z59er8a',
      center: [lng, lat],
      zoom: zoom
    });
  });

  return(
    // TODO: Map: https://docs.mapbox.com/help/tutorials/use-mapbox-gl-js-with-react/
    <div ref={mapContainer} className="h-10" />
  )
}

export default Map;
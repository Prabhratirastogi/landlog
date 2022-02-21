import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import * as mapboxconf from '../mapbox.config';

// // @ts-ignore
// // eslint-disable-next-line import/no-webpack-loader-syntax
// mapboxgl.workerClass = require('mapbox-gl/dist/mapbox-gl-csp-worker')

// Set Access Token for Mapbox
(mapboxgl as any).accessToken = mapboxconf.PublicAccessToken;

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
      style: mapboxconf.MapStyles.minimal,
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

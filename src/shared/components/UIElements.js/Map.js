import React, { useRef, useEffect } from 'react';
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';

import './Map.css';

const MapContainer = (props) => {
  const { center, zoom } = props;

  return (
    <APIProvider apiKey={process.env.REACT_APP_MAPS_KEY}>
      <div className={`map ${props.className}`} style={props.style}>
        <Map
          defaultCenter={center}
          defaultZoom={zoom}
          mapId={process.env.REACT_APP_MAPS_ID}
        >
          <AdvancedMarker position={center} />
        </Map>
      </div>
    </APIProvider>
  );
};

export default MapContainer;

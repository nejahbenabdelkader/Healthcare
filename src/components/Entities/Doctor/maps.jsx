import React from "react";
import styled from 'styled-components'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';



export const Main = styled.div`
  overflow: hidden;
  height: 400px;
  width: 800px;
  border-radius: 10px;
  border: 1px solid rgba(196, 196, 196, 1);
`;
const containerStyle = {
  width: '800px',
  height: '400px'
};

function Maps({position}) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP__GOOGLE_API_KEY
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <Main>
         <GoogleMap
        mapContainerStyle={containerStyle}
        center={position}
        zoom={14.5}
      >
         <Marker

        position={position}
      />
      </GoogleMap>
      </Main>
     
  ) : <></>
}

export default React.memo(Maps)
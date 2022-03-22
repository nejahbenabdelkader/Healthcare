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
const center = {
  lat: 36.871232,
  lng: 10.202698
};
function Maps() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyD0FtXfSjXyEhfc0K2s5Fw5trtBqFtIa9w"
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
        center={center}
        zoom={14.5}
      >
         <Marker

        position={center}
      />
      </GoogleMap>
      </Main>
     
  ) : <></>
}

export default React.memo(Maps)
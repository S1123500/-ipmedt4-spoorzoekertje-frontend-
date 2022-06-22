import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import data from '../assets/data';
import Markers from './VenueMarkers';
import useGeolocation from '../hooks/useGeolocation';
import L from 'leaflet';

const markericon = new L.Icon({
  iconUrl: require('../assets/marker.png'),
  iconSize: [25, 25],
  iconAnchor: [12, 45],
  popupAnchor: [0, -45]
});


const MapView = (props) => {

  const location = useGeolocation();

  const defaultLat = 52.160114;
  const defaultLng = 4.490900; //maakt de map aan met het correcte middenpunt en zoom zodat het overzichtelijk is.
  const zoom = 15;

  let latitude = location.coords.lat;
  let longitude = location.coords.lng;

  return (// Trekt de locaties uit de constants om het te renderen op de app.
    <Map center={[defaultLat, defaultLng]} zoom={zoom}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      /> 
      {/* De markers worden uit de datafile in assets gehaald, die staan hier vast in om neer te zetten. */}
      <Markers venues={data.venues} /> 
      {
        location.loaded && !location.error && (
          <Marker icon={markericon} position={[latitude || defaultLat, longitude || defaultLng]}>
            <Popup>You are here.</Popup>
          </Marker>
        )};
    </Map>
  );
}


export default MapView;


import React, { useEffect, useState } from "react";
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
// import data from '../assets/data';
import Markers from './VenueMarkers';
import useGeolocation from '../hooks/useGeolocation';
import L from 'leaflet';
import LocatieService from "../services/locatie.service";


const markericon = new L.Icon({
  iconUrl: require('../assets/marker.png'),
  iconSize: [25, 25],
  iconAnchor: [12, 45],
  popupAnchor: [0, -45]
});


const MapView = (props) => {

  const location = useGeolocation();

  const defaultLat = 52.160114;
  const defaultLng = 4.490900; //center of Leiden
  const zoom = 15;

  let latitude = location.coords.lat;
  let longitude = location.coords.lng;

  //constante locaties krijgt alle locaties mee
  const [locaties, setLocaties] = useState([]);

  useEffect(() => {
    LocatieService.getAll().then((response) => {
      setLocaties(response.data);
    });
  }, []);


  return (
    <Map center={[defaultLat, defaultLng]} zoom={zoom}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      {/* vanues word alle locaties binnen de marker */}
      <Markers venues={locaties} />
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


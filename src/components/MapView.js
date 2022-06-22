import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import data from '../assets/data';
import Markers from './VenueMarkers';

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: { lat: 52.160114, lng: 4.497010 }, //center of Leiden, regelt waar de kaart moet staan.
      zoom: 15, // zorgt dat de kaart zo ingezoomed is als nodig is.
    }
  }

  render() { // zorgt dat de kaart in de pagina geladen wordt.
    const { currentLocation, zoom } = this.state; 

    return ( //pull via leaflet de locatie en zet de de kaart via Mapview current location en zoom komen van Mapview.
      <Map center={currentLocation} zoom={zoom}> 
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />

        <Markers venues={data.venues}/> 
      </Map> // De markers komen van de data.json uit de assets folder. 
    );
  }
}

export default MapView;

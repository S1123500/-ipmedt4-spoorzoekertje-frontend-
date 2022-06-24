import React, { Fragment } from 'react'
import {Marker} from 'react-leaflet';
import {VenueLocationIcon} from './VenueLocationIcon';
import MarkerPopup from './MarkerPopup';

const MarkerLocation = (props) => {
  const { venues } = props;

  //aan venue worden de coordinaten meegegeven vanuit de database, en in markerpopup word data nu venue dus de locaties.
  const markers = venues.map((venue, index) => (
    <Marker key={index} position={venue.coordinaten} icon={VenueLocationIcon} >
      <MarkerPopup data={venue}/>
    </Marker>
  ));

  return <Fragment>{markers}</Fragment>
};

export default MarkerLocation;
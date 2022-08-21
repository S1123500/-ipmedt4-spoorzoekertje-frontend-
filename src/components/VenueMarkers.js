import React, { Fragment } from 'react'
import { Marker } from 'react-leaflet';
import { VenueLocationIcon } from './VenueLocationIcon';
import MarkerPopup from './MarkerPopup';

const VenueMarkers = (props) => {
  const { venues } = props;
  if (venues.length <= 0) {
    return <Fragment></Fragment>;
  }

  const venue_arr = Array.from(venues);

  const markers = venues.map((venue, index) => (
    <Marker key={index} position={venue.coordinaten} icon={VenueLocationIcon} >
      <MarkerPopup data={venue} />
    </Marker>
  ));

  const marker = venue_arr.find((element) => {
    if (!element.gehaald) {
      return element;
    }
    return "";
  });

  return <Fragment>
    <Marker key={marker.id} position={marker.coordinaten} icon={VenueLocationIcon} >
      <MarkerPopup data={marker} />
    </Marker>
  </Fragment>
};

export default VenueMarkers;
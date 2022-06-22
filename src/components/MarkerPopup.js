import React from 'react';
import {Popup} from 'react-leaflet';

const MarkerPopup = (props) => {
  const { name,beschrijving } = props.data;

  return  (<Popup>
    

    <div className='poup-text'>{name}</div>
    <p>{beschrijving}</p>
    <p></p>

  </Popup>);
};

export default MarkerPopup;

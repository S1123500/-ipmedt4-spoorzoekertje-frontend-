import React from 'react';
import {Popup} from 'react-leaflet';

const MarkerPopup = (props) => {

  //hier word een constante aan de data gekoppeld, name of beschrijving. hier kan nog foto, gehaald etc bij
  const { name, beschrijving } = props.data;


  return  (<Popup>
    {/* hier word de popup gevuld met info uit de database, door de eerder aangeroepen const hierboven */}
    <h3 className='poup-text'>{name}</h3>
    <p>{beschrijving}</p>
  </Popup>);
};

export default MarkerPopup;

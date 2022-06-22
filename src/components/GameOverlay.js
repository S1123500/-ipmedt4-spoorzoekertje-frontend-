import React from 'react';

import ContentTop from './ContentTop';
import ContentBottom from './ContentBottom';
import MapView from './MapView';

const Overlay = (props) => {
        return (
            <section className="Overlay">
                <ContentTop playertype={props.playertype}> </ContentTop>
                <MapView />
                <ContentBottom playertype={props.playertype} questsleft={props.questsleft} currentquest={props.currentquest} currentlocation={props.currentlocation}> </ContentBottom>
            </section>
        );
}

export default Overlay;
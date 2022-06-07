import React, { Component } from 'react';
import ContentBottom from './ContentBottom';
import ContentTop from './ContentTop';
import './Overlay.css';

class Overlay extends Component {
    render() {
        return (
            <>
                <ContentTop />
                <ContentBottom />
            </>
        );
    }
}

export default Overlay;
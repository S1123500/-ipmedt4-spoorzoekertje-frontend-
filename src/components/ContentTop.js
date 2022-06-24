import React from 'react';
import "../css/Overlay.css";

const ContentTop = (props) => {

    return (
        <section className="head">
            <p className="role">You’re a {props.playertype} </p>
        </section>
    );
};

ContentTop.defaultProps = {
    playertype: "nerd"
};

export default ContentTop;
import React from 'react';
import "./Overlay.css";

const ContentTop = (props) => {

    return (
        <div className="head">
            <p className="role">You’re a {props.playertype} </p>
        </div>
    );
};

ContentTop.defaultProps = {
    playertype: "nerd"
};

export default ContentTop;
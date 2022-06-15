import React from 'react';
import "./Overlay.css";
import Timer from "./Timer.js";

const PlayerContent = (props) => {
    return (
        <div className="bottomContent">
            <div className="questsleft">
                <h1>Quests Left: {props.questsleft}</h1>
            </div>
            <div className="interaction-container">
                <h2>Current Quest</h2>
                <ul className="submit-objective">
                    <li>
                        <p className="objective">{props.currentquest}</p>
                        <p className="location">Location: {props.currentlocation}</p>
                    </li>
                    <li>
                        <img
                            alt=""
                            className="camera-icon"
                            src="https://static.overlay-tech.com/assets/9ecae86e-1964-4d72-adf1-5e92c398c9d0.png"
                        />
                    </li>
                </ul>

                <div className="bottomContentInner">
                    <p>Receive next objective in</p>
                    <Timer totalseconds={69
                    }/>    
                </div>
            </div>
            <script src="src/js/Timer.js"></script>
        </div>
    );
};

PlayerContent.defaultProps = {
    questsleft: "unknown",
    currentquest: "default",
    currentlocation: "unknown location"
};

export default PlayerContent;
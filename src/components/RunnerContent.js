import React from 'react';
import "../css/Overlay.css";
import Timer from "./Timer.js";

const RunnerContent = (props) => {
    return (
        <div className="bottomContent">
            <div className="questsleft">
                <h1>Quests Given: {props.questsleft}</h1>
            </div>
            <div className="interaction-container">
                <h2>Make a Quest</h2>
                <ul className="submit-objective">
                    <li>
                        <label className="runner-label">
                            <input type="text" placeholder="Objective" />
                        </label>
                        <label className="runner-label">
                            <input type="text" placeholder="Location" />
                        </label>
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
                    <p>Give next objective in</p>
                    <Timer totalseconds={69}/>    
                </div>
            </div>
            <script src="src/js/Timer.js"></script>
        </div>
    );
};

RunnerContent.defaultProps = {
    questsleft: "unknown",
    currentquest: "default",
    currentlocation: "unknown location"
};

export default RunnerContent;
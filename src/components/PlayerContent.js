import React from 'react';
import "../css/Overlay.css";
import Timer from "./Timer.js";

const PlayerContent = (props) => {
    return (
        <section className="bottomContent">
            <section className="questsleft">
                <h1>Quests Left: {props.questsleft}</h1>
            </section>
            <section className="interaction-container">
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

                <article className="bottomContentInner">
                    <p>Receive next objective in</p>
                    <Timer totalseconds={69
                    }/>    
                </article>
            </section>
            <script src="src/js/Timer.js"></script>
        </section>
    );
};

PlayerContent.defaultProps = {
    questsleft: "unknown",
    currentquest: "default",
    currentlocation: "unknown location"
};

export default PlayerContent;
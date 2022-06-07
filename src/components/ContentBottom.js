import React from 'react';
import "./Overlay.css";

const ContentBottom = () => {
    return (
        <div className="bottomContent">
            <div className="questsleft">
                <h1>Quests Left: 4</h1>
            </div>
            <div className="interaction-container">
                <h2>Current Quest</h2>
                <ul className="submit-objective">
                    <li>
                        <p className="objective">Deel een meter bier</p>
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
                    <p>Next Location</p>
                    <h1 className="timer">5:61</h1>
                </div>
            </div>
        </div>
    );
}

export default ContentBottom;
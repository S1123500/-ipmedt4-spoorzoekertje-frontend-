import React, { useEffect, useState } from "react";
import "../css/Overlay.css";
import Timer from "./Timer.js";
import locatieService from "../services/locatie.service";

const PlayerContent = (props) => {
    const [locaties, setLocaties] = useState('');
    const [currentquest, setQuest] = useState('');
    const [currentlocation, setLocation] = useState('');
    var venue_arr = [];
    var currentvenue = '';
    var questsleft = '';
    const [questnumber, setNumber] = useState(0);

    useEffect(() => {
        locatieService.getAll().then((response) => {
            setLocaties(response.data);
        });
    }, []);

    currentvenue = '';
    questsleft = Object.keys(locaties).length - questnumber;


    console.log("locaties " + typeof locaties);
    console.log(locaties);

    if (locaties !== '') {
        currentvenue = locaties[questnumber];
        console.log("this");
        console.log(currentvenue['name']);
    }
    return (
        <section className="bottomContent">
            <section className="questsleft">
                <h1>Quests Left: {questsleft}</h1>
            </section>
            <section className="interaction-container">
                <h2>Current Quest</h2>
                <ul className="submit-objective">
                    <li>
                        <p className="objective">Quest: {currentvenue['beschrijving']}</p>
                        <p className="location">Location: {currentvenue['name']}</p>
                    </li>
                    <li>
                        <button onClick={() => setNumber(questnumber + 1)}>
                            <img
                                alt=""
                                className="camera-icon"
                                src="https://static.overlay-tech.com/assets/9ecae86e-1964-4d72-adf1-5e92c398c9d0.png"
                            />
                        </button>
                    </li>
                </ul>

                <article className="bottomContentInner">
                    <p>Receive next objective in</p>
                    <Timer totalseconds={600} />
                </article>
            </section>
            <script src="src/js/Timer.js"></script>
        </section>
    );
};

PlayerContent.defaultProps = {
    venue_arr: [],
    questsleft: "unknown",
    currentquest: "default",
    currentvenue: "unknown location"
};

export default PlayerContent;
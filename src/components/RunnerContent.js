import React, { useEffect, useState } from 'react';
import "../css/Overlay.css";
import Timer from "./Timer.js";
import LocatieService from "../services/locatie.service";
import axios from 'axios';

// import Form from "./CreateLocationForm"

const RunnerContent = (props) => {
    const [locaties, setLocaties] = useState([]);
    //const [selectedLocatie, postNewLocatie] = useState(0);

    const [formValue, setformValue] = React.useState({
        name: '',
        beschrijving: ''
    });

    const handleSubmit = (event) => {
        const objectiveFormData = new FormData();
        objectiveFormData.append("name", formValue.name)
        objectiveFormData.append("beschrijving", formValue.beschrijving)
        console.log("trying to post...");

        try {
            // const response = axios({
            //     method: "post",
            //     url: "http://127.0.0.1:8000/api/locaties",
            //     data: objectiveFormData,
            //     headers: { "Content-Type": "multipart/form-data" },
            // });
            console.log("post successful");
        }
        catch (error) {
            console.log("SOMETHING WENT WRONG");
            console.log(error);
        }
    }

    const handleChange = (e) => {
        setformValue({
            ...formValue,
            [e.target.name]: e.target.value
        });
        console.log(e.target.value);
    }

    useEffect(() => {
        LocatieService.getAll().then((response) => {
            setLocaties(response.data);
        });
    }, []);

    // useEffect(() => {
    //     LocatieService.postLocatie().then((response) => {
    //         postNewLocatie(response.data);
    //     });
    // }, []);


    return (
        <section className="bottomContent">
            <section className="questsleft">
                <h1>Quests Given: {props.questsleft}</h1>
            </section>
            <section className="interaction-container">
                <h2>Make a Quest</h2>
                <form onSubmit={handleSubmit}>
                    <ul className="submit-objective">
                        <li>
                            <label className="runner-label">
                                <input
                                    type="text"
                                    name="beschrijving"
                                    value={formValue.beschrijving}
                                    onChange={handleChange}
                                    placeholder="Objective"
                                />
                            </label>
                            <label className="runner-label">
                                <input
                                    type="text"
                                    name="name"
                                    value={formValue.name}
                                    onChange={handleChange}
                                    placeholder="Location"
                                />
                            </label>
                        </li>
                        <li>
                            <button type='submit'>
                                <img
                                    alt=""
                                    className="camera-icon"
                                    src="https://static.overlay-tech.com/assets/9ecae86e-1964-4d72-adf1-5e92c398c9d0.png"
                                />
                            </button>
                        </li>
                    </ul>
                </form>

                {/* <Form></Form> */}

                <article className="bottomContentInner">
                    <p>Give next objective in</p>
                    <Timer totalseconds={600} />
                </article>
            </section>
            <script src="src/js/Timer.js"></script>
        </section>
    );
};


RunnerContent.defaultProps = {
    questsleft: "unknown",
    currentquest: "default",
    currentlocation: "unknown location"
};

export default RunnerContent;
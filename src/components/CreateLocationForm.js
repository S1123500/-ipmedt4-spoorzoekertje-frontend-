import React, { useState } from "react";
import locatieService from "../services/locatie.service";

export const CreateLocationForm = () => {
    const [name, setName] = useState("");
    const [beschrijving, setBeschrijving] = useState("");
    const [coordinaten, setCoordinaten] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        const locationBody = {
            name:'',
            beschrijving:'',
            coordinaten:''
        };

        locatieService.postLocatie(locationBody);
    };
    return (
        <section>
            <form  onSubmit={onSubmit}>
                <ul className="submit-objective">
                    <li>
                        <label className="runner-label">
                            <input
                                type="text"
                                name="beschrijving"
                                // value={formValue.beschrijving}
                                onChange={(e) => setBeschrijving(e.target.value)}
                                placeholder="Objective"
                            />
                        </label>
                        <label className="runner-label">
                            <input
                                type="text"
                                name="name"
                                // value={formValue.name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Location"
                            />
                        </label>
                        <label className="runner-label">
                            <input
                                type="text"
                                name="coords"
                                // value={formValue.name}
                                onChange={(e) => setCoordinaten(e.target.value)}
                                placeholder="Coords"
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
        </section>
    )
}
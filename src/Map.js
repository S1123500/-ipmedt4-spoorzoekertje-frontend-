import React, { useEffect, useState } from "react";
import LocatieService from "./services/locatie.service";

export const Map = () => {
  const [locaties, setLocaties] = useState([]);
  const [selectedLocatie, setSelectedLocatie] = useState(0);

  useEffect(() => {
    LocatieService.getAll().then((response) => {
      setLocaties(response.data);
      
    });
    // LocatieService.getOne(1).then((response) => {
    //   setLocaties(response.data);
    // });
  }, []);

  return <div>
    {/* pinntje */}
    <button onClick={() => {setSelectedLocatie(1)}}> Button </button>
    {/* kaartje */}
    <section>
      <p>{locaties.length > 0 ? locaties[selectedLocatie].name : "Geen titel"}</p>
      <p>{locaties.length > 0 ? locaties[selectedLocatie].beschrijving : "Geen beschrijving"}</p>
      <p>{locaties.length > 0 ? locaties[selectedLocatie].foto : "Geen foto"}</p>
      <p>{locaties.length > 0 ? locaties[selectedLocatie].coordinaten : "Geen coordinaten"}</p>
    </section>
    {/* <p>{locaties.length > 0 ? locaties[1].title : "Geen titel"}</p> */}
  </div>;
};

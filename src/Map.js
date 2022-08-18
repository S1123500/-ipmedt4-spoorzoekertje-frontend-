import React, { useEffect, useState } from "react";
import LocatieService from "./services/locatie.service";
import RoomcodeService from "./services/roomcode.service";

export const Map = () => {
  const [locaties, setLocaties] = useState([]);
  const [selectedLocatie, setSelectedLocatie] = useState(0);

  const [roomcodes, setRoomcodes] = useState([]);
  const [newcode, getRoomcodes ] = useState([]);



  useEffect(() => {
    LocatieService.getAll().then((response) => {
      setLocaties(response.data);

    });
    // LocatieService.getOne(1).then((response) => {
    //   setLocaties(response.data);
    // });
  }, []);

  useEffect(() => {
    RoomcodeService.getRoomcode().then((response) => {
      setRoomcodes(response.data);
    });
  }, []);

  useEffect(() => {
    RoomcodeService.postRoomcode().then((response) => {
      getRoomcodes(response.data);
    });
  }, []);

  return <main>
    {/* pinntje */}
    <button onClick={() => { setSelectedLocatie(1) }}>dranklokaal</button>
    <button onClick={() => { setSelectedLocatie(0) }}>happy days</button>

    {/* roomcode display */}
    <section>
      <p>{roomcodes.length > 0 ? roomcodes.name : "Geen roomcode"}</p>
    </section>
    {/* kaartje */}
    <section>
      <p>{locaties.length > 0 ? locaties[selectedLocatie].name : "Geen titel"}</p>
      <p>{locaties.length > 0 ? locaties[selectedLocatie].beschrijving : "Geen beschrijving"}</p>
      <p>{locaties.length > 0 ? locaties[selectedLocatie].foto : "Geen foto"}</p>
      <p>{locaties.length > 0 ? locaties[selectedLocatie].coordinaten : "Geen coordinaten"}</p>
    </section>
    {/* <p>{locaties.length > 0 ? locaties[1].title : "Geen titel"}</p> */}
  </main>;
};

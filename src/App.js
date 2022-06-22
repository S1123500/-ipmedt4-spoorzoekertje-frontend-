import React, { useEffect, useState } from "react";

import LocatieService from "./services/locatie.service";
import { Locatie } from "./locatie";
import { Map } from "./Map";

function App() {
  const [locaties, setLocaties] = useState([]);

  return <Map/>;
}

export default App;

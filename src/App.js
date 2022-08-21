import React from 'react';
import Parent from './Parent';
import Overlay from './components/GameOverlay';
import Login from './components/Login';
import './css/App.css';
import LocatieService from "./services/locatie.service";
//import { CreateLocationForm } from './components/CreateLocationForm';


function App() {
  return (
    <section className="App">
      <Parent />
      {/* <CreateLocationForm /> debug */}
    </section>
  );
}


export default App;

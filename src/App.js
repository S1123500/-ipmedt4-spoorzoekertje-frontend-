import React from 'react';
import Parent from './Parent';
import Overlay from './components/GameOverlay';
import Login from './components/Login';
import './css/App.css';
import LocatieService from "./services/locatie.service";
// import ApiGET from './hooks/ApiGET';
// import ApiPOST from './hooks/ApiPOST';



function App() {

  //console.log(LocatieService.getAll());

  return (
    <section className="App">
      <Parent />
    </section>
  );
}


export default App;

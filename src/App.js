import React from 'react';
import Header from './components/Header'
import Section from './components/Section'
import Parent from './Parent';
import Overlay from './components/GameOverlay';
import Login from './components/Login';
import './css/App.css';
// import ApiGET from './hooks/ApiGET';
// import ApiPOST from './hooks/ApiPOST';


function App() {

  return (

    /* player page
      <section className="App">
          <Overlay playertype="player" questsleft="69" currentquest="Heel veel zuipen" currentlocation="Lazaru's"> </Overlay>
        </section>
        */

    /* runner page
      <section className="App">
          <Overlay playertype="runner" questsleft="69" currentquest="Heel veel zuipen" currentlocation="Lazaru's"> </Overlay>
        </section>
        */

        <main>
            <Header  />
            <Section />
          </main>
    /*
    <section className="App">
      <Parent />
    </section>
    */
  );
}

export default App;

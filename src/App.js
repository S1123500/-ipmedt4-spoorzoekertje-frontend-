import React from 'react';
import Overlay from './components/Overlay';
import './App.css';
import Header from './components/Header'
import Section from './components/Section'
import ApiGET from './hooks/ApiGET';
import ApiPOST from './hooks/ApiPOST';


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
  );
}

export default App;

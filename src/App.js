import React from 'react';
import Overlay from './components/Overlay';
import './App.css';

function App() {
  return (
    <section className="App">
      <Overlay playertype="runner" questsleft="69" currentquest="Heel veel zuipen" currentlocation="Lazaru's"> </Overlay>
    </section>
  );
}

export default App;

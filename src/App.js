import React from 'react';
// import Overlay from './components/GameOverlay';
import Login from './components/Login';
import './css/App.css';
// import ApiGET from './hooks/ApiGET';
// import ApiPOST from './hooks/ApiPOST';



function App() {
  return (
    <section className="App">
      {/* <Overlay playertype="player" questsleft="69" currentquest="Heel veel zuipen" currentlocation="Lazaru's"> </Overlay> */}
      <Login />
    </section>
  );
}

export default App;

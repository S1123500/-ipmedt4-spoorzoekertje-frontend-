import React from 'react';
import MapView from './components/MapView';
//import Overlay from './components/Overlay';
import ContentTop from './components/ContentTop';
import ContentBottom from './components/ContentBottom';
import './App.css';

function App() {
  return (
    <section className="App">
      <ContentTop playertype="player"> </ContentTop>
      <MapView/>
      <ContentBottom questsleft="69" currentquest="Heel veel zuipen" currentlocation="Lazaru's"> </ContentBottom>
    </section>
  );
}

export default App;

import React from 'react';
import MapView from './components/MapView';
//import Overlay from './components/Overlay';
import ContentTop from './components/ContentTop';
import ContentBottom from './components/ContentBottom';
import './App.css';

function App() {
  return (
    <section className="App">
      <ContentTop/>
      <MapView/>
      <ContentBottom/>
    </section>
  );
}

export default App;

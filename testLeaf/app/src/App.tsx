import React from 'react';
import './App.css';
import Map from './Map';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Leaflet Map POC</h1>
      <Map />
    </div>
  );
};

export default App;
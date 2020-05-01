import React from 'react';
import MainSlider from './Components/MainSlider'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className = "main-slider" >
          <MainSlider />
        </div>
      </header>
    </div>
  );
}

export default App;

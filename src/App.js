import React, { Component } from 'react';
import logo from './logo.svg';
import MainComponent from './components/MainComponent.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainComponent parentState={"Tushar"}/>
      </div>
    );
  }
}

export default App;

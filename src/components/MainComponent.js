import React, { Component } from 'react';
import Header from './Header.js';
import Body from './Body.js';
import Footer from './Footer.js';
import '../App.css';

class MainComponent extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Body parentState2 = {this.props.parentState}/>
        <Footer/>
      </div>
    );
  }
}

export default MainComponent;

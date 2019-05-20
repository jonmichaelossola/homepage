import React, { Component } from 'react';

import Navigation from './Navigation/Navigation';
import Resume from './Resume/Resume.js';
import Projects from './Projects/Projects.js';
import HomePage from './HomePage/HomePage.js';
import Particles from 'react-particles-js';
import Graph from './HomePage/Graph/Graph.js';
import './App.css';

import WOW from 'wowjs';

const particlesoptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true, 
        value_area: 800
      }
    }
  }
}

class App extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <div>
        <Particles 
          className='particles'
          params={particlesoptions}/>
        <Navigation />
        <HomePage />
        <div className='below-header'>
          <Resume />
          <div className='graph'>
            <Graph />
          </div>
          <Projects />
        </div>
      </div>
    );
  }
}

export default App;

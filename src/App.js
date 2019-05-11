import React, { Component } from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Resume from './Resume/Resume.js';
import Projects from './Projects/Projects.js';
import HomePage from './HomePage/HomePage.js';
import Particles from 'react-particles-js';
import Graph from './HomePage/Graph/Graph.js';
import './App.css';

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
  showOptions() {
    let topnavUl = document.getElementsByClassName('navbarul');
    for (let i of topnavUl) {
      i.classList.toggle('active');
    }

    let navChildren = document.querySelectorAll('.navitem');
    for (let j of navChildren) {
      j.classList.toggle('activeitems');
    }

    let newFlex = document.querySelector('.navbar');
    newFlex.classList.toggle('navbarflex');
  }

  render() {
    return (
      <div>
        <Particles 
          className='particles'
          params={particlesoptions}/>
        <nav className='navbar'>
          <i className='my-icon fa fa-bars' onClick={this.showOptions}></i>
          <ul className='navbarul'>
            <li className='navitem'><a href={'#HomePage'} className=''>Home</a></li>
            <li className='navitem'><a href={'#Projects'} className=''>Projects</a></li>
            <li className='navitem'><a href={'#Resume'} className=''>Resume</a></li>
            <li rel='noopener noreferrer' className='navitem rightside'><a target='_blank' href={'https://github.com/jonmichaelossola'}><i className='fab fa-github navicon'></i></a></li>
            <li rel='noopener noreferrer' className='navitem rightside'><a target='_blank' href={'https://www.linkedin.com/in/jon-michael-ossola-90a898161/'}><i className='fab fa-linkedin-in navicon'></i></a></li>
            <li rel='noopener noreferrer' className='navitem rightside'><a target='_blank' href={'mailto:jm.ossola24@gmail.com'}><i className='fas fa-envelope-open-text navicon'></i></a></li>
          </ul>
        </nav>
        <HomePage />
        <div className='below-header'>
          <div className='graph'>
            <Graph />
          </div>
          <Resume />
          <Projects />
        </div>
      </div>
    );
  }
}

export default App;

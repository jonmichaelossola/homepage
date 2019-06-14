import React, { Component } from 'react';
import faceApp from './face-recoginzer-app.png';
import Asteroids from './asteroids.jpg';
import Skeet from './skeet.png'

import './Projects.css'
import Project from './Project/Project';

class Projects extends Component {
    render() {
        return (
            <div id='Projects' data-wow-delay='.3s' data-wow-offset="80" className='Projects-component'>
                <h2 className='projects-header'>Projects</h2>
                <div className='projects-container'>
                    <Project className='fadeInLeft wow' name={'Facial Recognition Web App'} imgSrc={faceApp} linkToProject={'https://jonmichael-smart-brain.herokuapp.com/'} />
                    <Project className='fadeInLeft wow' name={'Asteroids Game (C++)'} imgSrc={Asteroids} linkToProject={'https://github.com/jonmichaelossola/School-Assignments/tree/master/Object-Oriented%20Programming%20C%2B%2B/asteroids'} />
                    <Project className='fadeInLeft wow' name={'Skeet Game (C++)'} imgSrc={Skeet} linkToProject={'https://github.com/jonmichaelossola/School-Assignments/tree/master/Object-Oriented%20Programming%20C%2B%2B/skeet'} />
                </div>
            </div>
        );
    }
}

export default Projects;
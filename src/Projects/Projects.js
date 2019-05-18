import React, { Component } from 'react';
import faceApp from './face-recoginzer-app.png';
import './Projects.css'

class Projects extends Component {
    render() {
        return (
            <div id='Projects' data-wow-delay='.3s' data-wow-offset="80" className='Projects-component wow zoomIn'>
                <h2 className='projects-header'>My Projects</h2>
                <div className='projects-container'>
                    <div className='project-container'>
                        <h5>Facial Recognition Web App</h5>
                        <a rel='noopener noreferrer' target='_blank' href='https://jonmichael-smart-brain.herokuapp.com/'>
                            <img className='project-image' src={faceApp} alt='My Face Recognition App' />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;
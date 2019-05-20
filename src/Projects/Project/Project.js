import React from 'react';
import './Project.css';

const Project = ({ name, imgSrc, linkToProject}) => {
    return (
        <div className='project-container'>
            <h5>{name}</h5>
            <a rel='noopener noreferrer' target='_blank' href={linkToProject}>
                <img className='project-image' src={imgSrc} alt='My Face Recognition App' />
            </a>
        </div>
    );
}

export default Project;
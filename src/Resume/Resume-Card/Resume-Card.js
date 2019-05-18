import React from 'react';
import './Resume-Card.css';

const ResumeCard = ({ title, company, date, description, sb }) => (
    <div className={sb}>
        <div className='title'>
            <h4>{title}</h4>
        </div>
        <div className='company'>
            <h5>{company}</h5>
            <h5>{date}</h5>
        </div>
        <div className='description'>
            <p>{description}</p>
        </div>
    </div>
);

export default ResumeCard;
import React, {Component} from 'react';
import './Resume.css'

class Resume extends Component {
    render() {
        return (
            <div id='Resume'>
                {/* <h1 className='tc resume-headerofheaders'>Resume</h1> */}
                
                <h2 className='tc resume-header'>Education</h2>
                <div className='resume-flex-container'>
                    <div className='resume-description2'>
                        <h2 className='description-header'>Brigham Young University - Idaho</h2>
                        <p>2017-2021</p>
                    </div>
                    <div className='resume-description'>
                        <h3 className='description-header2'>Computer Science</h3>
                        <p>GPA: 3.9</p>
                        <p>Working towards undergraduate in computer science. Completed courses in Web Development, 
                            Procedural Programming, Object Oriented Programming, Data Structures, as well as courses
                            like Calculus and other courses.
                        </p>
                    </div>
                </div>
                <div className='resume-flex-container'>
                    <div className='resume-description2'>
                        <h2 className='description-header'>Udemy</h2>
                    </div>
                    <div className='resume-description'>
                        <h3 className='description-header2'>The Complete Web Developer in 2019: Zero to Mastery</h3>
                        <p>Through this course, I learned skills such as Node.js and React.js, advanced
                            CSS concepts, And Postgres SQL.
                        </p>
                    </div>
                </div>

                <h2 className='tc resume-header'>Experience</h2>
                <div className='resume-flex-container'>
                    <div className='resume-description2'>
                        <h2 className='description-header'>Techtonic</h2>
                        <p>Current</p>
                    </div>
                    <div className='resume-description'>
                        <h3 className='description-header2'>Software Developer Apprentice</h3>
                        <p>There are two seperate parts to this apprenticeship. The 12 week program consists of classroom
                            learning where apprentices learn skills such as Test Driven Development, Solutions Architecture,
                            Serverless Application Models, Google Cloud Platform and Firebase, Relational Databases, Web API's
                            and REST Interfaces.
                        </p>
                    </div>
                </div>
                <div className='resume-flex-container'>
                    <div className='resume-description2'>
                        <h2 className='description-header'>ElectriConnection</h2>
                        <p>February 2019 - June 2019</p>
                    </div>
                    <div className='resume-description'>
                        <h3 className='description-header2'>Web Devloper/Maintenance</h3>
                        <p>Created Python scripts to organize masses of data to be able to upload to the website in Magento
                            platform. Created web scraper using BeautifulSoup module to compare prices of other similair
                            products.
                        </p>
                    </div>
                </div>
                <div className='resume-flex-container'>
                    <div className='resume-description2'>
                        <h2 className='description-header'>Brigham Young University - Idaho</h2>
                        <p>September 2018 - December 2018</p>
                    </div>
                    <div className='resume-description'>
                        <h3 className='description-header2'>Tutor</h3>
                        <p>Worked in teams with students to write and debug C++ code. Some of these projects included
                            a Sudoku project, a calendar project, and a mad lib parser.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;
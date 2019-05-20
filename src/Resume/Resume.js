import React, {Component} from 'react';
import './Resume.css'
import LineGraph from './Line-Graph.png';
import ResumeCard from './Resume-Card/Resume-Card';

const education = [
    {
        title: 'Brigham Young University - Idaho',
        company: 'Computer Science - GPA 3.9',
        date: 'August 2017 - August 2021',
        description: 'Completed courses from Web Development to Back End software development. Graduation date set for August 2021'
    },
    {
        title: 'Web Development: Zero to Mastery',
        company: 'Udemy',
        date: 'February 2019 - May 2019',
        description: 'Got certificate after watching 32 hours of videos in topics like React.js, Node, and other topics.'
    }
]

const experience = [
    {
        title: 'Software Engineering Tutor',
        company: 'Brigham Young University - Idaho',
        date: 'August 2018 - January 2018',
        description: 'Helped students in one on one sessions to tackle problems and deepen understanding of computer science topics.'
    },
    {
        title: 'Web Developer / Maintenance',
        company: 'Electriconnection',
        date: 'January 2019 - June 2019',
        description: 'Created Python scripts to sort data for Magento eCommerce platform'
    },
    {
        title: 'Software Developer Apprentice',
        company: 'Techtonic',
        date: 'June 2019 - present',
        description: 'Spent three months in classroom learning different skills such as Google Cloud Platform, worked in teams for three months applying skills and working on real client projects.'
    }
]

class Resume extends Component {
    render() {
        return (
            <div id='Resume' className='resume-component'>
                <h2 className='tc resume-header'>Education/Experience</h2>
                <div className='resume-grid'>
                    <img className='line-graph' alt='line in graph' src={LineGraph} height='1000px' width='auto'/>

                    <div className='education-1 fadeInLeft wow'>
                        <ResumeCard 
                            title={education[0].title} 
                            company={education[0].company} 
                            date={education[0].date} 
                            description={education[0].description} 
                            sb={'resume-card sbright'}
                            />
                    </div>

                    <div className='experience-1 fadeInRight wow'>
                        <ResumeCard 
                            title={experience[0].title} 
                            company={experience[0].company} 
                            date={experience[0].date} 
                            description={experience[0].description} 
                            sb={'resume-card sbleft'}
                        />
                    </div>

                    <div className='education-2 fadeInLeft wow'>
                        <ResumeCard 
                            title={education[1].title}
                            company={education[1].company}
                            date={education[1].date}
                            description={education[1].description}
                            sb={'resume-card sbright'}
                        />
                    </div>

                    <div className='experience-2 fadeInRight wow'>
                        <ResumeCard 
                            title={experience[1].title}
                            company={experience[1].title}
                            date={experience[1].date}
                            description={experience[1].description}
                            sb={'resume-card sbleft'}
                        />
                    </div>

                    <div className='experience-3 fadeInRight wow'>
                        <ResumeCard 
                            title={experience[2].title}
                            company={experience[2].company}
                            date={experience[2].date}
                            description={experience[2].description}
                            sb={'resume-card sbleft'}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Resume;
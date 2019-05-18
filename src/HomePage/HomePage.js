import React, { Component } from 'react';
import mySelfie from './selfie.png'
import './HomePage.css'

class HomePage extends Component {
    render() {
        return (
            <div id='HomePage' className='HomePage'>
                <div data-wow-delay='1.6s' className='home-flex-container landing-page fadeInDown wow'>
                    <img src={mySelfie} alt='Me' className='pic-of-me'/>
                    <div className='about-me-info'>
                    	<h1 className='body-header'>Welcome To My Webpage</h1>
                    	<p className='body-text'>Hi, I'm Jon Michael. 
                    	When I'm not on my computer working, you can find
                    	me going for a run, playing ping pong, or spending
                    	time with my family</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
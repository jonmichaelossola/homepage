import React from 'react';
import './Navigation.css'

const showOptions = () => {
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

const Navigation = () => (
    <nav className='navbar'>
        <i className='my-icon fa fa-bars' onClick={showOptions}></i>
        <ul className='navbarul'>
            <li data-wow-delay='.5s' className='navitem fadeInLeft wow'><a href={'#HomePage'} className=''>Home</a></li>
            <li data-wow-delay='.5s' className='navitem fadeInLeft wow'><a href={'#Projects'} className=''>Projects</a></li>
            <li data-wow-delay='.5s' className='navitem fadeInLeft wow'><a href={'#Resume'} className=''>Resume</a></li>
            <li className='navitem rightside'>
                <a rel='noopener noreferrer' target='_blank' href={'https://github.com/jonmichaelossola'}>
                <i data-wow-delay='1s' className='fab fa-github navicon fadeInRight wow'></i>
                </a>
            </li>
            <li className='navitem rightside'>
                <a rel='noopener noreferrer' target='_blank' href={'https://www.linkedin.com/in/jon-michael-ossola-90a898161/'}>
                <i data-wow-delay='1s' className='fab fa-linkedin-in navicon fadeInRight wow'></i>
                </a>
            </li>
            <li className='navitem rightside'>
                <a rel='noopener noreferrer' target='_blank' href={'mailto:jm.ossola24@gmail.com'}>
                <i data-wow-delay='1s' className='fas fa-envelope-open-text navicon fadeInRight wow'></i>
                </a>
            </li>
        </ul>
    </nav>
);

export default Navigation;
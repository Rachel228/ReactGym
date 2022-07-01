import React from 'react';
import aboutimage from '../images/about.png';

function About() {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src={aboutimage} alt=""/>
            </div>
            <div className='about-text'>
                <h1>LEARN MORE ABOUT US</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Explicabo tempora officia a quis pariatur adipisci hic 
                    delectus deleniti perferendis et est ipsum provident voluptate, 
                    nulla earum dignissimos, itaque harum ipsa maxime tenetur asperiores
                    praesentium! Nisi voluptatem corrupti ex sunt porro.</p>
                    <button> READ MORE</button>
            </div>
            
            
        </div>
    )
}

export default About

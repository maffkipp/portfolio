import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className='about'>
        <h2 className='about-title'>About Me</h2>
        <div className='about-container'>
          <div className='about-inner-flexbox'>
            <img  className='about-image'
                  src={require('../images/headshot.jpg')}
                  alt='Portrait'/>
            <p className='about-body'>I am a full stack web developer with
             a flair for creativity and outside-of-the-box problem solving.
             My experience as a musician has given me the ability to perform
             well under pressure and improvise when the situation calls for
             it, skills I put to use building powerful, elegant web apps.</p>
          </div>
          <h3 className='about-skills-title'>Skills:</h3>
        </div>
      </div>
    )
  }
}

export default About;

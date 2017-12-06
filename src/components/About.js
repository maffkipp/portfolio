import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className='about'>
        <div className='about-container'>
          <div className='about-inner-flexbox'>
            <img  className='about-image'
                  src={require('../images/headshot.jpg')}
                  alt='Portrait'/>
            <div className='about-body'>
              <p>I am a full-stack web developer
              based out of Austin, Texas. I focus on front-end development
              with Javascript, HTML, CSS, Sass, and React, although I am also proficient
              with back-end technologies such as Node.js, Express, MongoDB, Python,
              and Nginx.</p>
              <p>I love working with web technologies because they require a unique
              combination of technical discipline and creative passion. In my free
              time I perform and record music, and I hope to apply the skills I have
              learned as a musician towards my career as a web developer.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About;

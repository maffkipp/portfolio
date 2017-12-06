import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <a className='footer-link' target='_blank' href='https://www.linkedin.com/in/maffkipp/' rel="noopener noreferrer">
          <span className='fa fa-linkedin-square fa-2x'></span>
        </a>
        <a className='footer-link' target='_blank' href='https://github.com/maffkipp' rel="noopener noreferrer">
          <span className='fa fa-github-square fa-2x'></span>
        </a>
        <a className='footer-link' target='_blank' href='https://medium.com/@wesleymafflykipp' rel="noopener noreferrer">
          <span className='fa fa-medium fa-2x'></span>
        </a>
      </div>
    )
  }
}

export default Footer;

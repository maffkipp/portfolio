import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <a className='footer-link' href='https://www.linkedin.com/in/maffkipp/'>
          <span class='fa fa-linkedin-square fa-2x'></span>
        </a>
        <a className='footer-link' href='https://github.com/maffkipp'>
          <span class='fa fa-github-square fa-2x'></span>
        </a>
        <a className='footer-link' href='https://medium.com/@wesleymafflykipp'>
          <span class='fa fa-medium fa-2x'></span>
        </a>
      </div>
    )
  }
}

export default Footer;
import React, { Component } from "react";

// Page with contact info and resume download
class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="contact-container">
          <p className="contact-body">
            Feel free to get in touch with me in regards to employment
            opportunities, freelance work, or any questions regarding my
            portfolio and previous experience.
          </p>
          <p className="contact-body">I can be reached by phone or email:</p>
          <p className="contact-info">919-259-4410</p>
          <p className="contact-info">wesleymafflykipp@gmail.com</p>
          <p className="contact-body">
            My resume is available for download as a PDF below, and links to my
            LinkedIn, Github, and Medium accounts are at the bottom of the page.
          </p>
          <a
            className="contact-download"
            href={require("../downloads/Resume_Wesley_Maffly-Kipp.pdf")}
            download
          >
            Download my Resume
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;

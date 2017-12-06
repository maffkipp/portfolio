import React, { Component } from 'react';

import projectData from '../projectData.js';

class ProjectFull extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      image: '',
      url: '',
      github: '',
      about: '',
      details: ''
    }
    this.getDataFromId = this.getDataFromId.bind(this);
    this.setDataToState = this.setDataToState.bind(this);
  }

  componentWillMount() {
    this.getDataFromId();
  }

  getDataFromId() {
    const pageId = this.props.propData.match.params.id;
    const project = projectData.filter(entry => {
      return entry.id === pageId;
    });
    this.setDataToState(project);
  }

  setDataToState(data) {
    this.setState({
      title: data[0].title,
      image: data[0].image,
      url: data[0].url,
      github: data[0].github,
      about: data[0].about,
      details: data[0].details
    });
  }

  render() {
    return (
      <div className='project-full'>
        <div className='project-full-container'>
          <div className='project-full-flexbox'>
            <img className='project-full-image' src={this.state.image} alt={this.state.title} />
            <div className='project-full-inner-container'>
              <h1 className='project-full-title'>{this.state.title}</h1>
              <a className='project-full-link' href={this.state.url} target='_blank' rel="noopener noreferrer">
                <span className='fa fa-link fa-3x'></span>
              </a>
              <a className='project-full-link' href={this.state.github} target='_blank' rel="noopener noreferrer">
                <span className='fa fa-github fa-3x'></span>
              </a>
              <p className='project-full-about'>{this.state.about}</p>
              <p className='project-full-details'>{this.state.details}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectFull;

import React, { Component } from 'react';

import projectData from '../projectData.js';

class ProjectFull extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      image: '',
      description: '',
      details: ''
    }
    this.getDataFromId = this.getDataFromId.bind(this);
  }

  componentWillMount() {
    this.getDataFromId();
  }

  getDataFromId() {
    const pageId = this.props.propData.match.params.id;
    const project = projectData.filter(entry => {
      return entry.id === pageId;
    });
    console.log(project);
    this.setState({
      title: project[0].title,
      image: project[0].image,
      description: project[0].description,
      details: project[0].details
    });
  }

  render() {
    return (
      <div className='project-full'>
        <h1>{this.state.title}</h1>
        <img src={this.state.image} alt={this.state.title} />
        <p>{this.state.description}</p>
        <p>{this.state.details}</p>
      </div>
    )
  }
}

export default ProjectFull;

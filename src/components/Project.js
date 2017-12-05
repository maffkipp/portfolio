import React, { Component } from 'react';

class Project extends Component {
  render() {
    return (
      <div className='project'>
        <img className='project-image'
             src={this.props.data.image}
             alt={this.props.title} />
        <h4 className='project-title'>{this.props.data.title}</h4>
      </div>
    )
  }
}

export default Project;

import React from 'react'

class ProjectStageTwo extends React.Component{
  constructor(props){
    super(props)
  }


  render(){
    return(
      <div className="projects-stage-two-container">
        <div className="projects-stage-two-main-content-container">
          <div className="stage-two-top-level-text">
            <h1>Stage Two</h1>
            <h2>Your project is live. We will notify you when you receive interest from an agency.</h2>
          </div>
          <div className="stage-two-project-details-view">
            <section className="stage-two-project-details-form">
              <h1>{this.props.project.project_name}</h1>
              <p>{this.props.project.service_needed_details}</p>
              <h2>{this.props.project.service_needed.name}</h2>
            </section>
          </div>
        </div>

      </div>
    )
  }
}


export default ProjectStageTwo

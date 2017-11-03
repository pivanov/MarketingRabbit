import React from 'react';
import DashboardHeaderContainer from './dashboard_header_container';
import ProjectStageTwo from './project_stagetwo';

class ProjectShow extends React.Component{
  constructor(props){
    super(props)
    this.state = this.props.project
    this.renderProgressBar = this.renderProgressBar.bind(this)
    this.renderProjectStageContent = this.renderProjectStageContent.bind(this)
  }

  componentDidMount(){
    this.props.fetchProject(this.props.match.params.projectId)
  }

  componentWillReceiveProps({project}){
    this.setState(project)
  }

  renderProgressBar(){
    var style;
    if(this.state){
      style = {
        width: (this.state.stage / 5 * 100) + '%'
      }
    } else {
      style = {
        width: (0) + '%'
      }
    }
    return(
      <div className="service-form-progress-bar">
        <span style={style}></span>
      </div>
    )
  }

  renderProjectStageContent(){
    if(this.state){
      if(this.state.stage == 2){
        return (
          <ProjectStageTwo project={this.state} />
        )
      }
    }
  }

  render(){

    return(
      <div className="dashboard-container">
        <DashboardHeaderContainer />
        <div className="root-project-show-container">
          <div className="project-show-content-container">
            <div className="dummy-block">
            </div>
            <div className="project-stage-container">
              <div className="project-stage-content-container">
                <span className="project-progress-step">Project Stage</span>
                {this.renderProgressBar()}
              </div>
            </div>
            {this.renderProjectStageContent()}
          </div>
        </div>
      </div>
    )
  }
}


export default ProjectShow;

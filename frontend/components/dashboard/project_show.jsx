import React from 'react'
import DashboardHeaderContainer from './dashboard_header_container';

class ProjectShow extends React.Component{
  constructor(props){
    super(props)
    this.state = this.props.project
    this.renderProgressBar = this.renderProgressBar.bind(this)
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
          </div>
        </div>
      </div>
    )
  }
}


export default ProjectShow;

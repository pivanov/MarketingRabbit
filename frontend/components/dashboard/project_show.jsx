import React from 'react'
import DashboardHeaderContainer from './dashboard_header_container';

class ProjectShow extends React.Component{
  constructor(props){
    super(props)
    this.state = this.props.project
  }

  componentDidMount(){
    this.props.fetchProject(this.props.project.id)
  }

  componentWillReceiveProps(nextProps){
    this.setState(nextProps)
  }

  render(){
    return(
      <div className="dashboard-container">
        <DashboardHeaderContainer />
        <div className="root-project-show-container">
          <div className="project-show-content-container">
            {this.props.project.project_name}
          </div>
        </div>
      </div>
    )
  }
}


export default ProjectShow;

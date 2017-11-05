import React from 'react';
import DashboardHeaderContainer from './dashboard_header_container';

class AvailableProjects extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      projects_list: []
    }
  }

  componentDidMount(){
    this.props.fetchRelevantProjects(this.props.currentUser.id)
  }

  componentWillReceiveProps(nextProps){
    this.setState({projects_list: nextProps.projects})
  }

  render(){
    if (this.state.projects_list.length == 0){
      return(
        <div className="no-projects-response">
          <h1>No projects to display</h1>
        </div>
      )
    } else {
      let projectsArray = Object.values(this.state.projects_list)
      let projects = projectsArray.map((obj)=>{
        return (
          <li>{obj.project_name}</li>
        )
      })
      return (
        <div className="dashboard-container">
          <DashboardHeaderContainer />
          <div className="root-project-show-container">
            <div className="project-show-content-container">
              <div className="dummy-block">
              </div>
              <div className="available-projects-container">
                <div>
                  <h1>Available Projects</h1>
                </div>
              </div>
              {projects}
            </div>
          </div>
        </div>
      )
    }
  }
}

export default AvailableProjects

import React from 'react';
import ProjectIndexItem from './project_index_item';
import DashboardHeaderContainer from './dashboard_header_container'
import { withRouter } from 'react-router-dom';

class ProjectsPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      projects_list: []
    }
    this.renderProjects = this.renderProjects.bind(this)
    this.handleNewProject = this.handleNewProject.bind(this)
  }

  componentDidMount(){
    this.props.fetchProjects(this.props.currentUser.id)
  }

  componentWillReceiveProps(nextProps){
    this.setState({projects_list: nextProps.projects})
  }

  renderProjects(){
    if (this.state.projects_list.length == 0){
      return(
        <div className="no-projects-response">
          <h1>No projects to display</h1>
          <button>Start a new project now</button>
        </div>
      )
    } else {
      let projectsArray = Object.values(this.state.projects_list).reverse()
      let projects = projectsArray.map((obj)=>{
        return (
          <div className="main-project-index-list-item-container" key={obj.id}>
            <div className="project-index-list-item-subcontainer">
                <ProjectIndexItem project={obj}/>
            </div>
          </div>
        )
      })
      return (
        <ul>
          {projects}
        </ul>
      )
    }
  }

  handleNewProject(e){
    e.preventDefault()
    this.props.history.push('/dashboard/projects/new')
  }

  render(){
    return (
      <div className="dashboard-container">
        <DashboardHeaderContainer />
        <div className="main-projects-index-page-container">
          <div className="projects-index-page-main-header-container">
            <div className="projects-index-page-header-content-container">
              <button name="new-project" onClick={this.handleNewProject} className="new-project-button">New project</button>
            </div>
          </div>
          <div className="projects-index-page-top-level-content-container">
            <div className="projects-index-page-main-content-container">
              {this.renderProjects()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(ProjectsPage)

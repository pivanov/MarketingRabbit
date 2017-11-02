import React from 'react';
import ProjectIndexItem from './project_index_item';
import LazyLoad from 'react-lazyload';

class ProjectsPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      projects_list: []
    }
    this.renderProjects = this.renderProjects.bind(this)
  }

  componentDidMount(){
    // debugger
    this.props.fetchProjects(this.props.currentUser.id)
  }

  componentWillReceiveProps(nextProps){
    // debugger
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
      let projectsArray = Object.values(this.state.projects_list)
      let projects = projectsArray.map((obj)=>{
        return (
          <LazyLoad height={400} once key={obj.id} offset={400}>
            <ProjectIndexItem project={obj}/>
          </LazyLoad>
        )
      })
      return (
        <div className="main-project-index-list-item-container">
          <div className="project-index-list-item-subcontainer">
            {projects}
          </div>
        </div>
      )
    }
  }

  render(){
    return (
      <div className="main-projects-index-page-container">
        <div className="projects-index-page-top-level-content-container">
          <div className="projects-index-page-main-header-container">
            <div className="projects-index-page-header-content-container">
              <button name="new-project" onClick={this.props.handleSelectedPage} className="new-project-button">New project</button>
            </div>
          </div>
          <div className="projects-index-page-main-content-container">
              {this.renderProjects()}
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectsPage

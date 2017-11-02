import React from 'react'
// import ProjectIndexItem from 'project_index_item'

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
    debugger
    if (this.state.projects_list.length == 0){
      return(
        <div className="no-projects-response">
          <h1>No projects to display</h1>
          <button>Start a new project now</button>
        </div>
      )
    } else {
      let projectsArray = Object.values(this.state.projects_list)
      debugger
      let projects = projectsArray.map((obj)=>{
        return <li key={obj.id}>{obj.project_name}</li>
      })
      debugger
      return (
        <ul>
          {projects}
        </ul>
      )
    }
  }

  render(){

    debugger
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

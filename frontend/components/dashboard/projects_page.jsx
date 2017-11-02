import React from 'react'
// import ProjectIndexItem from 'project_index_item'

class ProjectsPage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      projects_list: []
    }
  }

  componentDidMount(){
    // debugger
    this.props.fetchProjects(this.props.currentUser.id)
  }

  componentWillReceiveProps(nextProps){
    // debugger
    this.setState({projects_list: nextProps.projects})
  }

  render(){
    // const projects = this.state.projects.forEach
    // debugger
    return (
      <div className="main-projects-index-page-container">
        <div className="projects-index-page-top-level-content-container">
          <div className="projects-index-page-main-header-container">
            <div className="projects-index-page-header-content-container">
              <button className="new-project-button">New project</button>
            </div>
          </div>
          <div className="projects-index-page-main-content-container">

          </div>
        </div>
      </div>
    )
  }
}

export default ProjectsPage

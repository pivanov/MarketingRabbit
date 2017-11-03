import React from 'react';
import { Link } from 'react-router-dom';

class ProjectIndexItem extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="project-list-item-content">
        <h1>{this.props.project.project_name}</h1>
        <h2>{this.props.project.serv}</h2>
        <div className="view-project-item-container">
          <Link to={`/dashboard/projects/${this.props.project.id}`} className="view-project-link">Edit</Link>
        </div>
      </div>
    )
  }
}


export default ProjectIndexItem

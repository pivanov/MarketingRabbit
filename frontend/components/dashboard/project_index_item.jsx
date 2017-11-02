import React from 'react';

class ProjectIndexItem extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <h1>{this.props.project.project_name}</h1>
      </div>
    )
  }
}


export default ProjectIndexItem

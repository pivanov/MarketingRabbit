import React from 'react';

// const QueryResultItem = (props)=>{
//   return(
//     <div>
//       {props.result}
//     </div>
//   )
// }

class QueryResultItem extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      result: this.state.result
    }
    this.handleRedirect = this.handleRedirect.bind(this)
  }

  handleRedirect(){
    return null 
  }

  render(){
    return(
      <div onClick={this.handleRedirect}>
        {this.props.result}
      </div>
    )
  }
}

export default QueryResultItem

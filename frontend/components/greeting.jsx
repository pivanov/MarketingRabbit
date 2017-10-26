import React from 'react';
import { Link } from 'react-router-dom'

class Greeting extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
    if(this.props.currentUser){
      return (
        <div>
          <h1> Welcome back {this.props.currentUser.email}</h1>
          <button onClick={this.props.logout}>Logout</button>
        </div>
      )
    } else {
      return(
        <Link to='/bridge'> Log in</Link>
      )
    }
  }
}

export default Greeting

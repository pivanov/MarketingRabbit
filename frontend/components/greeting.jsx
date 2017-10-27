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
        <section>
          <Link to='/register/agency'> Register your agency </Link>
          <br />
          <Link to='/bridge'> Log in</Link>
        </section>
      )
    }
  }
}

export default Greeting

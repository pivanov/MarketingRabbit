import React from 'react';
import { Link } from 'react-router-dom'

class Greeting extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
    if(this.props.currentUser){
      if(this.props.currentUser.type == 'Business'){
        return (
          <div>
            <h1> Hello {this.props.currentUser.organization}</h1>
            <h1> Account: {this.props.currentUser.type}</h1>
            <h1> Industry: {this.props.currentUser.industry.name} </h1>
            <button onClick={this.props.logout}>Logout</button>
          </div>
        )
      } else if (this.props.currentUser.type == 'Agency'){
        return (
          <div>
            <h1> Hello {this.props.currentUser.organization}</h1>
            <h1> Account: {this.props.currentUser.type}</h1>
            <button onClick={this.props.logout}>Logout</button>
          </div>
        )
      }
    } else {
      return(
        <section>
          <Link to='/register/agency'> Register your agency </Link>
          <br />
          <Link to='/login'> Log in</Link>
        </section>
      )
    }
  }
}

export default Greeting

import React from 'react';
import { Link } from 'react-router-dom';

class BridgePage extends React.Component{
  constructor(props){
    super(props)
  }


  render() {

    return (
      <form className="sharedForm">
        <button className="thirdPartyAuthButton">Linkedin</button>
        <button className="thirdPartyAuthButton">Google</button>
        <p>or</p>
        <p>Login or sign up with email</p>
        <div className="authButtonsContainer">
          <Link to="/login" className="authButtons">Login</Link>
          <Link to="/signup" className="authButtons">Sign Up</Link>
        </div>
      </form>
    )
  }
}

export default BridgePage;

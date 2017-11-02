import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    if(!this.props.currentUser){
      return(
        <header className="main-site-header-container">
          <div className="main-site-header-content-container">
            <div className="header-content">
              <h1>[LOGO]</h1>
              <div>
                <Link to="/login" className="login-link-nav">Login</Link>
                <Link to="/register/agency" className="regist-agency-button-nav">Register your agency</Link>
              </div>
            </div>
          </div>
        </header>
      )
    } else {
      return null
    }
  }
}

export default Header

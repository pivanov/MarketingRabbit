import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component{
  constructor(props){
    super(props)
    this.renderProperLinks = this.renderProperLinks.bind(this)
  }

  renderProperLinks(){
    if(this.props.currentUser){
      return(
        <div>
          <button onClick={this.props.logout} className="logout-nav-button">Logout</button>
          <Link to="/dashboard" className="dashboard-nav-button">Dashboard</Link>
        </div>
      )
    } else{
      return(
        <div>
          <Link to="/login" className="login-link-nav">Login</Link>
          <Link to="/register/agency" className="regist-agency-button-nav">Register your agency</Link>
        </div>
      )
    }
  }

  render(){
    return (
      <header className="main-site-header-container">
        <div className="main-site-header-content-container">
          <div className="header-content">
            <h1>[LOGO]</h1>
            {this.renderProperLinks()}
          </div>
        </div>
      </header>
    )
  }
}

export default Header

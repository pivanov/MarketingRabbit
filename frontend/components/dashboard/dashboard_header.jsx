import React from 'react'
import { withRouter } from 'react-router-dom';

class DashboardHeader extends React.Component{
  constructor(props){
    super(props)

    this.handleNavigation = this.handleNavigation.bind(this)
  }

  componentWillMount(){
    this.setState({selected_page: ""})
  }


  handleNavigation(e){
    e.preventDefault
    if(e.target.name == 'projects'){
      this.props.history.push('/dashboard/projects')
    } else if(e.target.name == 'logout'){
      this.props.logout().then(()=>this.props.history.push('/login'))
    } else if(e.target.name == 'home'){
      this.props.history.push('/dashboard')
    }
  }

  render(){
    return(
      <header className="dashboard-nav-header-container">
        <div className="main-site-header-content-container">
          <div className="header-content">
            <h1>[LOGO]</h1>
              <div>
                <button className="dashboard-main-nav-buttons">Notifications</button>
                <button className="dashboard-main-nav-buttons">Agency Database</button>
                <button name="projects" onClick={this.handleNavigation} className="dashboard-main-nav-buttons">Projects</button>
                <button className="dashboard-main-nav-buttons">Account Details</button>
                <button onClick={this.handleNavigation} name="logout"className="dashboard-main-nav-buttons">Logout</button>
                <button onClick={this.handleNavigation} name="home" className="dashboard-nav-home-button">Dashboard</button>
              </div>
          </div>
        </div>
      </header>
    )
  }
}


export default withRouter(DashboardHeader);

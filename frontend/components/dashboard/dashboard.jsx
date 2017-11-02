import React from 'react'
import { withRouter } from 'react-router-dom';
import ServiceFormContainer from './service_form_container';
import ProjectsPageContainer from './projects_page_container';

class Dashboard extends React.Component{
  constructor(props){
    super(props)
    this.state={
      selected_page: ""
    }

    this.handleLogout = this.handleLogout.bind(this)
    this.handleSelectedPage = this.handleSelectedPage.bind(this)
  }

  renderSelectedPage(page){
    if(page == 'projects'){
      return (
        <ProjectsPageContainer />
      )
    } else {
      return (
        <h1>Hello</h1>
      )
    }
  }

  handleLogout(e){
    e.preventDefault()
    this.props.logout().then(()=>this.props.history.push('/login'))
  }

  handleSelectedPage(e){
    e.preventDefault
    this.setState({selected_page: e.target.name})
  }


  render(){
    return(
      <div>
        <header className="main-site-header-container">
          <div className="main-site-header-content-container">
            <div className="header-content">
              <h1>[LOGO]</h1>
                <div>
                  <button className="dashboard-main-nav-buttons">Notifications</button>
                  <button className="dashboard-main-nav-buttons">Agency Database</button>
                  <button name="projects" onClick={this.handleSelectedPage} className="dashboard-main-nav-buttons">Projects</button>
                  <button className="dashboard-main-nav-buttons">Account Details</button>
                  <button onClick={this.handleLogout} className="dashboard-main-nav-buttons">Logout</button>
                  <label disabled className="dashboard-nav-label">Dashboard</label>
                </div>
            </div>
          </div>
          {this.renderSelectedPage(this.state.selected_page)}
        </header>
      </div>

    )
  }
}


export default withRouter(Dashboard);

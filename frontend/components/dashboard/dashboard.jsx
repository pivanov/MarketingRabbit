import React from 'react'

class Dashboard extends React.Component{
  constructor(props){
    super(props)
  }

  // renderSelectedPage(){
  //
  // }

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
                  <button className="dashboard-main-nav-buttons">Projects</button>
                  <button className="dashboard-main-nav-buttons">Account Details</button>
                  <button onClick={this.props.logout} className="dashboard-main-nav-buttons">Logout</button>
                  <label disabled className="dashboard-nav-label">Dashboard</label>
                </div>
            </div>
          </div>
        </header>
      </div>

    )
  }
}


export default Dashboard;

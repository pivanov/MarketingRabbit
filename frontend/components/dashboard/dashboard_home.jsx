import React from 'react'
import DashboardHeaderContainer from './dashboard_header_container'
class DashboardHome extends React.Component{
  constructor(props){
    super(props)
  }

  render(){

    return (
      <div className="dashboard-container">
        <DashboardHeaderContainer />
        <section className="main-dashboard-home-container">
          <div className="dashboard-home-content-container">
            <h1>Home</h1>
          </div>
        </section>
      </div>
    )
  }
}

export default DashboardHome

import React from 'react'

class HomePage extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="root-home-page-container">
        <div className="main-home-page-content-container">
          <section className="first-home-content-container">
            <div className="welcome-content-container">
              <div className="home-welcome-content">
                <h1>THINK DIFFERENTLY ABOUT WHO DOES YOUR MOST IMPORTANT PROJECTS</h1>
                <hr/>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default HomePage;

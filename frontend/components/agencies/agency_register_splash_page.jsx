import React from 'react';

class AgencyRegisterSplashPage extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div id="splash-agency-registration-page">
        <header className="splash-agency-header">
          <div className="main-header-content-container">
            <section className="splash-header-content-container">
              <section className="splash-header-jumbo-text">
                <h1>There is always room for growth</h1>
                <h4>Register your agency.</h4>
              </section>
            </section>
          </div>
        </header>
      </div>
    )
  }
}

export default AgencyRegisterSplashPage;

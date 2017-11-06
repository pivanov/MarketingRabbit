import React from 'react';
import {withRouter} from 'react-router-dom'

class AgencyRegisterSplashPage extends React.Component{
  constructor(props){
    super(props)
    this.handleFormRedirect = this.handleFormRedirect.bind(this)
  }

  handleFormRedirect(e){
    e.preventDefault()
    this.props.history.push('/register-agency/form')
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
              <section className="to-register-form-button-container">
                <button onClick={this.handleFormRedirect}>Go to form</button>
              </section>
            </section>
          </div>
        </header>
      </div>
    )
  }
}

export default withRouter(AgencyRegisterSplashPage);

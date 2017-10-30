import React from 'react';
import BusinessSignUp from './business_signup';
import LoginForm from './login_form';
import { Link } from 'react-router-dom';

class SharedPage extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    let component,top_text,bottom_text, button_text, link_to;
    if(this.props.match.path === '/signup'){
      top_text="Create an account"
      bottom_text="Already have an account?"
      button_text="Log in"
      link_to = "login"
      component = <BusinessSignUp
                    errors={this.props.registrationErrors}
                    clearRegistrationErrors={this.props.clearRegistrationErrors}
                    registerBusiness={this.props.registerBusiness}
                    industries={this.props.industries}
                    sectors={this.props.sectors}/>
    } else if(this.props.match.path === "/login"){
      top_text = "Log in to an existing account";
      bottom_text="Don't have an account?"
      button_text="Sign up"
      link_to = "signup"
      component = <LoginForm
                    errors={this.props.sessionErrors}
                    clearSessionErrors = {this.props.clearSessionErrors}
                    login={this.props.login}/>
    }
    return (
      <div id="sharedPage">
        <div className="shared-form-main-content-container">
          <div className="shared-form-content">
            <h1>{top_text}</h1>
            <section className="formContainer">
            {component}
            </section>
            <div className="form-bottom-text-container">
              <h1>{bottom_text}</h1>
              <Link className="shared-form-bottom-button" to={`/${link_to}`}>{button_text}</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SharedPage;

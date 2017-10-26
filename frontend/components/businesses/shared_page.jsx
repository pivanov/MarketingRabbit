import React from 'react';
import BusinessSignUp from './business_signup';
import LoginForm from './login_form';
import BridgePage from './bridge_page';

class SharedPage extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    let component;
    if(this.props.match.path === '/signup'){
      component = <BusinessSignUp
                    errors={this.props.errors}
                    clearErrors={this.props.clearErrors}
                    registerBusiness={this.props.registerBusiness}/>
    } else if(this.props.match.path === "/login"){
      component = <LoginForm
                    errors={this.props.errors}
                    clearErrors = {this.props.clearErrors}
                    login={this.props.login}/>
    } else if(this.props.match.path === '/bridge'){
      component = <BridgePage />
    }
    return (
      <div>
        <div id="sharedPage"></div>
        <section className="formContainer">
        {component}
        </section>
      </div>
    )
  }
}

export default SharedPage;

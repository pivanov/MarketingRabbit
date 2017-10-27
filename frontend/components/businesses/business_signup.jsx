import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class BusinessSignUp extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      firstname: "",
      lastname: "",
      organization: "",
      email: "",
      password: "",
      website: ""
    }

    this.hanleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount(){
    this.props.clearRegistrationErrors();
  }

  handleInput(field){
    return (e) => (
      this.setState({[field]: e.target.value})
    )
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.registerBusiness(this.state).then(()=>this.props.history.push('/'))
  }


  checkForField(fieldError, field){
    const errorFieldObject= eval(`this.props.errors.${fieldError}`);
    if (errorFieldObject){
      if (fieldError == 'organization') {
        return (
          <p>business name can't be blank</p>
        )
      } else {
        return <p>{field + " " + this.props.errors[fieldError][0]}</p>
      }
    }
  }

  render() {

    return (
        <form className="sharedForm" onSubmit={this.handleSubmit}>
          <label htmlFor="firstname">First Name</label>
          <input onChange={this.handleInput('firstname')} id="firstname" placeholder="First name" type="text" value={this.state.firstname}/>
          {this.checkForField('firstname', 'first name')}
          <br />
          <label htmlFor="lastname">Last Name</label>
          <input onChange={this.handleInput('lastname')} id="lastname" placeholder="Last name" type="text" value={this.state.lastname}/>
          {this.checkForField('lastname', 'last name')}
          <br />
          <label htmlFor="organization">Business Name</label>
          <input onChange={this.handleInput('organization')} id="organization" placeholder="Business name" type="text" value={this.state.organization}/>
          {this.checkForField('organization', 'organization')}
          <br />
          <label htmlFor="email">Business Email</label>
          <input onChange={this.handleInput('email')} id="email" placeholder="you@your-email.com" type="text" value={this.state.email} />
          {this.checkForField('email', 'email')}
          <br />

          <label htmlFor="website">Website</label>
          <input onChange={this.handleInput('website')} id="website" placeholder="https://your-website.com" type="text" value={this.state.website} />
          {this.checkForField('website', 'website')}
          <br />

          <label htmlFor="password">Password</label>
          <input onChange={this.handleInput('password')} id="password" placeholder="Password" type="password" value={this.state.password}/>
          {this.checkForField('password', 'password')}
          <br />

          <button className="submitButton">Create Account</button>

        </form>
    )
  }

}


export default withRouter(BusinessSignUp);

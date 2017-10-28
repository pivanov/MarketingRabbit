import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
// import Select from 'react-virtualized-select';
// import 'react-select/dist/react-select.css';
// top two imports are for select-drop-down package

class BusinessSignUp extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      firstname: "",
      lastname: "",
      organization: "",
      industry_id: "",
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
      if(fieldError == "password"){
        return <p>{field + " " + this.props.errors[fieldError][0]}</p>
      } else if(fieldError == 'email' && this.props.errors[fieldError][0] !== 'has already been taken'){
        return <p>{field + " " + "is required"}</p>
      } else if (fieldError == "email"){
        return <p>{field + " " + this.props.errors[fieldError][0]}</p>
      } else {
        return <p>{field + " " + "is required"}</p>
      }

    }
  }

  render() {

    return (
        <form className="sharedForm" onSubmit={this.handleSubmit}>
          <div className="full-name-container-business">
            <div className="first-name-container">
              <label htmlFor="firstname">First Name</label>
              <input onChange={this.handleInput('firstname')} id="firstname" placeholder="First name" type="text" value={this.state.firstname}/>
              {this.checkForField('firstname', 'first name')}
            </div>

            <div className="last-name-container">
              <label htmlFor="lastname">Last Name</label>
              <input onChange={this.handleInput('lastname')} id="lastname" placeholder="Last name" type="text" value={this.state.lastname}/>
              {this.checkForField('lastname', 'last name')}
            </div>
          </div>
          <br />
          <label htmlFor="organization">Business Name</label>
          <input onChange={this.handleInput('organization')} id="organization" placeholder="Business name" type="text" value={this.state.organization}/>
          {this.checkForField('organization', 'business name')}
          <br />

          <label htmlFor="industry">Industry</label>
          <input onChange={this.handleInput('industry')} id="industry" placeholder="Industry" />
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

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
    this.props.clearErrors();
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

  renderErrors(){
    const errors = this.props.errors.map((error, idx)=>{
      return <li key={idx}>{error}</li>
    })
    return (
      <ul>
        {errors}
      </ul>
    )
  }

  checkForField(fieldError, field){
    const errorFieldObject= eval(`this.props.errors.${fieldError}`);
    const fieldObject = eval(`this.state.${field}`);
    if (errorFieldObject){
      if(fieldObject.length == 0){
        return (
          <p>{this.props.errors[fieldError][0]}</p>
        )
      }
    }
  }

  render() {

    return (
        <form className="sharedForm" onSubmit={this.handleSubmit}>
          {this.renderErrors()}
          <label htmlFor="firstname">First Name</label>
          <input onChange={this.handleInput('firstname')} id="firstname" type="text" value={this.state.firstname}/>
          <br />
          <label htmlFor="lastname">Last Name</label>
          <input onChange={this.handleInput('lastname')} id="lastname" type="text" value={this.state.lastname}/>
          <br />
          <label htmlFor="organization">Business Name</label>
          <input onChange={this.handleInput('organization')} id="organization" type="text" value={this.state.organization}/>
          <br />
          <label htmlFor="email">Business Email</label>
          <input onChange={this.handleInput('email')} id="email" type="text" value={this.state.email} />
          <br />

          <label htmlFor="website">Website</label>
          <input onChange={this.handleInput('website')} id="website" type="text" value={this.state.website} />
          <br />

          <label htmlFor="password">Password</label>
          <input onChange={this.handleInput('password')} id="password" type="password" value={this.state.password}/>
          <br />

          <button className="submitButton">Create Account</button>

        </form>
    )
  }

}


export default withRouter(BusinessSignUp);

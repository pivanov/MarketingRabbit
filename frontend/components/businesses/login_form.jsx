import React from 'react'
import { withRouter } from 'react-router-dom'


class LoginForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      email: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.demoLogin = this.demoLogin.bind(this)
  }

  componentWillMount(){
    this.props.clearSessionErrors()
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.login(this.state).then(()=>this.props.history.push('/dashboard'))
  }

  handleInput(field){
    return (e) => (
      this.setState({[field]: e.target.value})
    )
  }

  checkForField(fieldError, field){
    const errorFieldObject= eval(`this.props.errors.${fieldError}`);
    const fieldObject = eval(`this.state.${field}`);
    if (errorFieldObject){
      return (
        <p>{this.props.errors[fieldError][0]}</p>
      )
    }
  }

  checkForValidity(){
    if(this.props.errors['invalidcredentials']){
      return (
        <p>{this.props.errors['invalidcredentials'][0]}</p>
      )
    }
  }

  demoLogin(){
    this.props.login({email:"demo@gmail.com", password:"test1234"})
  }

  render(){

    return(
      <div>
        <form className="sharedForm" onSubmit={this.handleSubmit}>
          {this.checkForValidity()}
          <label htmlFor="signinemail">Email</label>
          <input onChange={this.handleInput('email')} id="signinemail" type="text" placeholder="you@your-email.com" value={this.state.email}/>
          {this.checkForField('invalidEmail', 'email')}
          <br/>

          <label htmlFor="signinpassword">Password</label>
          <input type="password" onChange={this.handleInput('password')} placeholder="Password" id="signinpassword"/>
          {this.checkForField('blankPassword', 'password')}
          <br/>
        <button className="submitButton">Log In</button>
        </form>
        <button onClick={this.demoLogin}>Demo login</button>
      </div>
    )
  }
}

export default withRouter(LoginForm);

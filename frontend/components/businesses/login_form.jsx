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
  }

  // componentWillReceiveProps(nextProps){
  //   if()
  // }

  componentWillMount(){
    this.props.clearSessionErrors()
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.login(this.state).then(()=>this.props.history.push('/'))
  }

  handleInput(field){
    return (e) => (
      this.setState({[field]: e.target.value})
    )
  }

  renderErrors() {
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

  checkForValidity(){
    function isNotEmpty(element, index, array){
      return element.length > 0
    }
    if(Object.values(this.state).every(isNotEmpty)){
      return (
        <p>{this.props.errors['invalidcredentials']}</p>
      )
    }
  }

  render(){

    return(
      <form className="sharedForm" onSubmit={this.handleSubmit}>
        {this.checkForValidity()}
        <label htmlFor="signinemail">Email</label>
        <input onChange={this.handleInput('email')} id="signinemail" type="text" value={this.state.email}/>
        {this.checkForField('invalidEmail', 'email')}
        <br/>

        <label htmlFor="signinpassword">Password</label>
        <input type="password" onChange={this.handleInput('password')} id="signinpassword"/>
        {this.checkForField('blankPassword', 'password')}
        <br/>

      <button className="submitButton">Log In</button>
      </form>
    )
  }
}

export default withRouter(LoginForm);

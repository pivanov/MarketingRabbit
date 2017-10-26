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
  //   if(this.props.errors.length != 0){
  //     this.props.clearErrors()
  //   }
  // }

  componentWillMount(){
    this.props.clearErrors()
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

  render(){

    return(
      <form className="sharedForm" onSubmit={this.handleSubmit}>
        {this.renderErrors()}
        <label htmlFor="signinemail">Email</label>
        <input onChange={this.handleInput('email')} id="signinemail" type="text" value={this.state.email}/>
        <br/>

        <label htmlFor="signinpassword">Password</label>
        <input type="password" onChange={this.handleInput('password')} id="signinpassword"/>

        <br/>

      <button className="submitButton">Log In</button>
      </form>
    )
  }
}

export default withRouter(LoginForm);

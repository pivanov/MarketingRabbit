import React from 'react'

class BusinessSignUp extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      firstname: "",
      lastname: "",
      organization: "",
      email: "",
      password: ""
    }

    this.hanleInput = this.handleInput.bind(this)
  }

  handleInput(field){
    return (e) => (
      this.setState({[field]: e.target.value})
    )
  }

  handleSubmit(e){
    e.preventDefault();

  }

  render() {

    return (
      <div>
        <div id="businessSignUpPage"></div>
        <section className="formContainer">
          <form className="signupForm" onSubmit={this.handleSubmit}>
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
            <label htmlFor="password">Password</label>
            <input onChange={this.handleInput('password')} id="password" type="password" value={this.state.password}/>
            <br />

            <div className="submitButtonContainer">
              <button className="submitButton">Create Account</button>
            </div>
          </form>
        </section>

      </div>
    )
  }

}


export default BusinessSignUp;

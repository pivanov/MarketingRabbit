import React from 'react'
import { withRouter } from 'react-router-dom';

class AgencyFirstForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      organization: "",
      password: ""
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount(){
    this.props.clearRegistrationErrors();
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.registerAgency(this.state).then(()=>this.history.push('/'))
  }

  handleInput(field){
    return (e) => {
      this.setState({[field]: e.target.value})
    }
  }

  checkForField(fieldError, field){
    const errorFieldObject= eval(`this.props.errors.${fieldError}`);
    if (errorFieldObject){
      if(fieldError == "password"){
        return <p>{field + " " + this.props.errors[fieldError][0]}</p>
      } else {
        return <p>{field + " " + "is required"}</p>
      }
    }
  }


  render(){
      return (
      <section className="agency-first-form-container">
        <form onSubmit={this.handleSubmit} className='agencyFirstForm'>
            <div className="full-name-container-agency">
              <div className="first-name-container-agency">
                <label htmlFor="agencyRepFname">First name</label>
                <input id="agencyRepFname" onChange={this.handleInput('firstname')} placeholder="Firstname" value={this.state.firstname}/>
                {this.checkForField('firstname', 'first name')}
              </div>

              <div className="last-name-container-agency">
                <label htmlFor="agencyRepLname">Last name</label>
                <input id="agencyRepLname" onChange={this.handleInput('lastname')} placeholder="Last name" value={this.state.lastname}/>
                {this.checkForField('lastname', 'last name')}
              </div>
            </div>
          <br/>
          <label htmlFor="agencyRepEmail">Best Email</label>
          <input id="agencyRepEmail" onChange={this.handleInput('email')} placeholder="you@your-email.com" value={this.state.email}/>
          {this.checkForField('email', 'email')}
          <br />
          <label htmlFor="agencyName">Agency Name</label>
          <input id="agencyName" onChange={this.handleInput('organization')} placeholder="Agency name" value={this.state.organization}/>
          {this.checkForField('organization', 'agency name')}
          <br />
          <label htmlFor="website">Password</label>
          <input id="website" type="password" onChange={this.handleInput('password')} placeholder="Password" value={this.state.password}/>
          {this.checkForField('password', 'password')}
          <button>Continue Registration</button>
        </form>
      </section>
    )
  }
}

export default withRouter(AgencyFirstForm);

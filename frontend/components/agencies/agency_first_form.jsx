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

  handleSubmit(e){
    e.preventDefault();
    this.props.registerAgency(this.state).then(()=>this.history.push('/'))
  }

  handleInput(field){
    return (e) => {
      this.setState({[field]: e.target.value})
    }
  }


  render(){
      return (
      <section className="agency-first-form-container">
        <form onSubmit={this.handleSubmit} className='agencyFirstForm'>
          <label htmlFor="agencyRepFname">First name</label>
          <input id="agencyRepFname" onChange={this.handleInput('firstname')} placeholder="Firstname" value={this.state.firstname}/>
          <br/>
          <label htmlFor="agencyRepLname">Last name</label>
          <input id="agencyRepLname" onChange={this.handleInput('lastname')} placeholder="Last name" value={this.state.lastname}/>
          <br/>
          <label htmlFor="agencyRepEmail">Best Email</label>
          <input id="agencyRepEmail" onChange={this.handleInput('email')} placeholder="you@your-email.com" value={this.state.email}/>
          <br />
          <label htmlFor="agencyName">Agency Name</label>
          <input id="agencyName" onChange={this.handleInput('organization')} placeholder="Agency name" value={this.state.organization}/>
          <br />
          <label htmlFor="agencyRepPassword">Password</label>
          <input id="agencyRepPassword" type="password" onChange={this.handleInput('password')} placeholder="Password" value={this.state.password}/>
          <button>Continue Registration</button>
        </form>
      </section>
    )
  }
}

export default withRouter(AgencyFirstForm);

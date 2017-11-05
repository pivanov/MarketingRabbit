import React from 'react'
import { withRouter } from 'react-router-dom';

class AgencyRegisterStepThree extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      firstname: "default",
      lastname: "default",
      phone_number: "default",
      email: "default",
      password: "default"
    }
    this.nextStep = this.nextStep.bind(this)
    this.previousStep = this.previousStep.bind(this)
  }

  showInputError(){
    function isEmpty(el){
      return el.length == 0
    }

    if(Object.values(this.state).some(isEmpty)){
      return (
        <p>All fields are required</p>
      )
    }
  }

  checkForField(fieldError, field){
    const errorFieldObject= eval(`this.props.errors.${fieldError}`);
    if (errorFieldObject){
        return <p>{field + " " + this.props.errors[fieldError][0]}</p>
    }
  }

  previousStep(e){
    e.preventDefault()
    const data = {
      firstname: this.firstname.value,
      lastname: this.lastname.value,
      phone_number: this.lastname.value,
      email: this.email.value,
      password: this.password.value
    }
    this.props.saveValues(data)
    this.props.previousStep()
  }

  nextStep(e){
    e.preventDefault()
    const data ={
      firstname: this.firstname.value,
      lastname: this.lastname.value,
      phone_number: this.lastname.value,
      email: this.email.value,
      password: this.password.value
    }
    let dataKeys = Object.keys(data)
    let errors = 0
    dataKeys.forEach((key)=>{
      if(eval(`data.${key}`).length == 0 || eval(`data.${key}`) == "default"){
        data[key] = ""
        errors += 1
      }
    })
    this.setState(data)
    if(errors == 0){
      this.props.saveValues(data)
      this.props.handleSubmit()
    }
  }


  render(){
      return (
        <form onSubmit={this.nextStep} className='agencyFirstForm'>
            <div className="full-name-container-agency">
              <div className="first-name-container-agency">
                <label htmlFor="agencyRepFname">First name</label>
                <input type="text" id="agencyRepFname" ref={(input)=>this.firstname=input} placeholder="Firstname" defaultValue={this.props.agencyFields.firstname}/>
              </div>

              <div className="last-name-container-agency">
                <label htmlFor="agencyRepLname">Last name</label>
                <input type="text" id="agencyRepLname" ref={(input)=>this.lastname=input} placeholder="Last name" defaultValue={this.props.agencyFields.lastname}/>
              </div>
            </div>
          <br/>
          <label htmlFor="phonenumber">Phone number</label>
          <input type="text" id="phonenumber" ref={(input)=>this.phone_number=input} placeholder="(123)-456-789" defaultValue={this.props.agencyFields.phone_number}/>
          <br />
          <label htmlFor="email">Email</label>
          <input type="text" id="email" ref={(input)=>this.email=input} placeholder="your-email@email.com" defaultValue={this.props.agencyFields.email}/>
          {this.checkForField('email', 'email')}
          <br/>
          <label htmlFor="password" htmlFor="website">Password</label>
          <input id="password" type="password" ref={(input)=>this.password=input} placeholder="password" defaultValue={this.props.agencyFields.password}/>
          {this.checkForField('password', 'password')}
          <button onClick={this.previousStep}>Back</button>
          <button>Continue Registration</button>
          {this.showInputError()}
      </form>
    )
  }
}

export default withRouter(AgencyRegisterStepThree);

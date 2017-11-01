import React from 'react'
import { withRouter } from 'react-router-dom';

class AgencyFirstForm extends React.Component{
  constructor(props){
    super(props)

    this.nextStep = this.nextStep.bind(this)
    this.checkForField = this.checkForField.bind(this)
  }

  // componentWillMount(){
  //   this.props.clearRegistrationErrors();
  // }

  // handleSubmit(e){
  //   e.preventDefault();
  //   this.props.registerAgency(this.state).then(()=>this.history.push('/'),
  //       (errors)=>{
  //         let errorsArray = Object.keys(errors.errors)
  //         if(errorsArray.length == 3){
  //           this.props.history.push({
  //             pathname: '/register/agency/form',
  //             state: {
  //               firstname: this.state.firstname,
  //               lastname: this.state.lastname,
  //               email: this.state.email,
  //               organization: this.state.organization,
  //               website: this.state.website
  //             }
  //           })
  //         }
  //         // some conditional statement
  //         // when passed, redirect to sign up page step 2 with props
  //       })
  // }

  // handleInput(field){
  //   return (e) => {
  //     this.setState({[field]: e.target.value})
  //   }
  // }

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

  nextStep(e){
    e.preventDefault()
    const data ={
      firstname: this.firstname.value,
      lastname: this.lastname.value,
      email: this.email.value,
      organization: this.organization.value,
      website: this.website.value
    }
    // a possible validation for multi-step form completion in the frontend
    // let current_data_keys = Object.keys(data)
    // iterate through all the values in the data variable and ensure none of them are empty

    this.props.saveValues(data)
    this.props.nextStep()
  }


  render(){
      return (
      <section className="agency-first-form-container">
        <form onSubmit={this.nextStep} className='agencyFirstForm'>
            <div className="full-name-container-agency">
              <div className="first-name-container-agency">
                <label htmlFor="agencyRepFname">First name</label>
                <input id="agencyRepFname" ref={(input)=>this.firstname=input} placeholder="Firstname" defaultValue={this.props.agencyFields.firstname}/>
                {this.checkForField('firstname', 'first name')}
              </div>

              <div className="last-name-container-agency">
                <label htmlFor="agencyRepLname">Last name</label>
                <input id="agencyRepLname" ref={(input)=>this.lastname=input} placeholder="Last name" defaultValue={this.props.agencyFields.lastname}/>
                {this.checkForField('lastname', 'last name')}
              </div>
            </div>
          <br/>
          <label htmlFor="agencyRepEmail">Best Email</label>
          <input id="agencyRepEmail" ref={(input)=>this.email=input} placeholder="you@your-email.com" defaultValue={this.props.agencyFields.email}/>
          {this.checkForField('email', 'email')}
          <br />
          <label htmlFor="agencyName">Agency Name</label>
          <input id="agencyName" ref={(input)=>this.organization=input} placeholder="Agency name" defaultValue={this.props.agencyFields.organization}/>
          {this.checkForField('organization', 'agency name')}
          <br />
          <label htmlFor="website">Website</label>
          <input id="website" type="text" ref={(input)=>this.website=input} placeholder="https://your-website.com" defaultValue={this.props.agencyFields.website}/>
          {this.checkForField('website', 'website')}
          <button>Continue Registration</button>
        </form>
      </section>
    )
  }
}

export default withRouter(AgencyFirstForm);

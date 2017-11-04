import React from 'react'
import { withRouter } from 'react-router-dom';

class AgencyRegisterStepOne extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      firstname: "default",
      lastname: "default",
      organization:"default",
      website: "default"
    }
    this.nextStep = this.nextStep.bind(this)
  }

  showInputError(field){
    if(eval(`this.state.${field}`).length == 0){
      return <p>This field is required</p>
    }
  }

  nextStep(e){
    e.preventDefault()
    const data ={
      firstname: this.firstname.value,
      lastname: this.lastname.value,
      organization: this.organization.value,
      website: this.website.value
    }
    let dataKeys = Object.keys(data)
    let errors = 0
    dataKeys.forEach((key)=>{
      if(eval(`data.${key}`).length == 0){
        errors += 1
      }
    })
    this.setState(data)
    if(errors == 0){
      this.props.saveValues(data)
      this.props.nextStep()
    }
  }


  render(){
      return (
        <form onSubmit={this.nextStep} className='agencyFirstForm'>
            <div className="full-name-container-agency">
              <div className="first-name-container-agency">
                <label htmlFor="agencyRepFname">First name</label>
                <input id="agencyRepFname" ref={(input)=>this.firstname=input} placeholder="Firstname" defaultValue={this.props.agencyFields.firstname}/>
                {this.showInputError('firstname')}
              </div>

              <div className="last-name-container-agency">
                <label htmlFor="agencyRepLname">Last name</label>
                <input id="agencyRepLname" ref={(input)=>this.lastname=input} placeholder="Last name" defaultValue={this.props.agencyFields.lastname}/>
                {this.showInputError('lastname')}
              </div>
            </div>
          <br/>
          <label htmlFor="agencyName">Agency Name</label>
          <input id="agencyName" ref={(input)=>this.organization=input} placeholder="Agency name" defaultValue={this.props.agencyFields.organization}/>
          {this.showInputError('organization')}
          <br />
          <label htmlFor="website">Website</label>
          <input id="website" type="text" ref={(input)=>this.website=input} placeholder="https://your-website.com" defaultValue={this.props.agencyFields.website}/>
          {this.showInputError('website')}
          <button>Continue Registration</button>
      </form>
    )
  }
}

export default withRouter(AgencyRegisterStepOne);

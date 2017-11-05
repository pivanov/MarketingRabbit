import React from 'react'
import AgencyRegisterStepOne from './agency_register_stepone'
import AgencyRegisterStepTwo from './agency_register_steptwo'
import AgencyRegisterStepThree from './agency_register_stepthree';

var agencyFields = {
    firstname: "",
    lastname: "",
    email: "",
    organization: "",
    website: "",
    city_ids: "",
    password: "",
    service_ids: "",
    sector_ids: "",
    industry_ids: "",
    business_type_served: "",
    minimum_project_size: ""
}

class AgencyRegistrationProcess extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      step: 1
    }

    this.renderStep = this.renderStep.bind(this)
    this.nextStep = this.nextStep.bind(this)
    this.previousStep = this.previousStep.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount(){
    agencyFields = {
      firstname: "",
      lastname: "",
      email: "",
      organization: "",
      website: "",
      city_ids: "",
      password: "",
      service_ids: "",
      sector_ids: "",
      business_type_served: "",
      minimum_project_size: ""
    }
  }

  nextStep(){
    this.setState({step: this.state.step + 1})
  }

  previousStep(){
    this.setState({step: this.state.step -1})
  }

  handleSubmit(){
    this.props.registerAgency(agencyFields).then(()=>history.push("/dashboard"))
  }

  saveValues(value){
    agencyFields = Object.assign({}, agencyFields, value)
  }

  renderStep(){
    switch(this.state.step){
      case 1:
        return(
          <AgencyRegisterStepOne
            previousStep={this.previousStep}
            agencyFields={agencyFields}
            saveValues={this.saveValues}
            services={this.props.services}
            nextStep={this.nextStep} />
        )
      case 2:
        return(
          <AgencyRegisterStepTwo
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            agencyFields={agencyFields}
            saveValues={this.saveValues}
            cities={this.props.cities}
            sectors={this.props.sectors}
            industries={this.props.industries}/>
        )
      case 3:
        return(
          <AgencyRegisterStepThree
            agencyFields={agencyFields}
            previousStep={this.previousStep}
            saveValues={this.saveValues}
            errors={this.props.errors}
            handleSubmit={this.handleSubmit}/>
        )
    }
  }

  render(){
    return (
        <div className="agency-register-steptwo-container">
          <section className="agency-register-steptwo-main-content-container">
            <div className="agency-register-steptwo-third-level-container">
              {this.renderStep()}
            </div>
          </section>
        </div>
    )
  }

}


export default AgencyRegistrationProcess

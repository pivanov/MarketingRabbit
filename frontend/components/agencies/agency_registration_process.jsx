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
    vertical_ids: "",
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
      vertical_ids: "",
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
            agencyFields={agencyFields}
            nextStep={this.nextStep}
            saveValues={this.saveValues}
            />
        )
      case 2:
        return(
          <AgencyRegisterStepTwo
            previousStep={this.previousStep}
            agencyFields={agencyFields}
            saveValues={this.saveValues}
            errors={this.props.errors}
            cities={this.props.cities}
            services={this.props.services}
            sectors={this.props.sectors}
            nextStep={this.nextStep} />
        )
      case 3:
        return(
          <AgencyRegisterStepThree
            previousStep={this.previousStep}
            agencyFields={agencyFields}
            saveValues={this.saveValues}
            handleSubmit={this.handleSubmit} />
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

import React from 'react'
import AgencyRegisterSplashPageContainer from './agency_register_splash_container'
import AgencyRegisterStepTwo from './agency_register_steptwo'

var agencyFields = {
    firstname: "",
    lastname: "",
    email: "",
    organization: "",
    website: "",
    city_id: "",
    password: "",
    service_ids: "",
    vertical_ids: ""
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

  componentDidMount(){
    this.props.clearRegistrationErrors()
    agencyFields = {
        firstname: "",
        lastname: "",
        email: "",
        organization: "",
        website: "",
        city_id: "",
        password: "",
        service_ids: "",
        vertical_ids: ""
    }
  }

  nextStep(){
    this.props.registerAgency(agencyFields)
      .then(()=>this.setState({step: this.state.step + 1}),
      (errors)=>{
        let errorsArray = Object.keys(errors.errors)
        if(errorsArray.length == 5){
          this.setState({step: this.state.step + 1})
        }
      })
  }

  previousStep(){
    this.setState({step: this.state.step -1})
  }

  handleSubmit(){
    debugger
    this.props.registerAgency(agencyFields).then(()=>history.push("/"))
  }

  saveValues(value){
    agencyFields = Object.assign({}, agencyFields, value)
  }

  renderStep(){
    switch(this.state.step){
      case 1:
        return(
          <AgencyRegisterSplashPageContainer
            agencyFields={agencyFields}
            nextStep={this.nextStep}
            saveValues={this.saveValues} />
        )
      case 2:
        return(
          <AgencyRegisterStepTwo
            agencyFields={agencyFields}
            saveValues={this.saveValues}
            errors={this.props.errors}
            cities={this.props.cities}
            services={this.props.services}
            sectors={this.props.sectors}
            handleSubmit={this.handleSubmit}/>
        )
    }
  }

  render(){
    return (
      <div>
        {this.renderStep()}
      </div>
    )
  }

}


export default AgencyRegistrationProcess

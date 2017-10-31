import React from 'react'
import ServiceFormStepOne from './service_form_stepone';
import ServiceFormStepTwo from './service_form_steptwo';
import ServiceFormStepThree from './service_form_stepthree';
import ServiceFormStepFour from './service_form_stepfour';

var projectFields = {
  business_id: "",
  project_name: "",
  service_needed: "",
  service_needed_details: "",
  project_start_date: "",
  monthly_budget: "",
  location_preference: false,
  agency_preference: false,
  agency_type: "",
  agency_size: "",
  provider_id: ""
}

class ServiceForm extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      step: 1
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.saveValues = this.saveValues.bind(this)
    this.nextStep = this.nextStep.bind(this)
    this.previousStep = this.previousStep.bind(this)
  }

  componentDidMount(){
    this.props.clearProjectErrors();
    projectFields = {
      business_id: this.props.currentUser.id,
      project_name: "",
      service_needed: "",
      service_needed_details: "",
      project_start_date: "",
      monthly_budget: "",
      location_preference: false,
      agency_preference: false,
      agency_type: "",
      agency_size: "",
    }
  }

  handleSubmit(){
    this.props.createProject(projectFields)
    // after successful creation of a project redirec to new project show page
  }

  saveValues(values){
    projectFields = Object.assign({}, projectFields, values)
  }

  nextStep(){
    this.setState({step: this.state.step + 1})
  }

  previousStep(e){
    e.preventDefault()
    this.setState({step: this.state.step - 1})
  }

  renderStep(){
    switch(this.state.step){
      case 1:
        return (
          <ServiceFormStepOne
                projectFields={projectFields}
                nextStep={this.nextStep}
                saveValues={this.saveValues}
                clearProjectErrors={this.props.clearProjectErrors}
                projectErrors={this.props.projectErrors}/>
        )
      case 2:
        return (
          <ServiceFormStepTwo
                projectFields={projectFields}
                nextStep={this.nextStep}
                previousStep={this.previousStep}
                saveValues={this.saveValues}
                clearProjectErrors={this.props.clearProjectErrors}
                projectErrors={this.props.projectErrors}/>
        )
      case 3:
        return (
          <ServiceFormStepThree
                projectFields={projectFields}
                nextStep={this.nextStep}
                previousStep={this.previousStep}
                saveValues={this.saveValues}
                clearProjectErrors={this.props.clearProjectErrors}
                projectErrors={this.props.projectErrors}/>
        )
      case 4:
        return (
          <ServiceFormStepFour
                projectFields={projectFields}
                nextStep={this.nextStep}
                previousStep={this.previousStep}
                saveValues={this.saveValues}
                clearProjectErrors={this.props.clearProjectErrors}
                projectErrors={this.props.projectErrors}
                handleSubmit={this.props.handleSubmit}/>
        )
    }
  }

  render() {
    var style = {
      width: (this.state.step / 4 * 100) + '%'
    }
    return (
      <section className="service-form-page-container">
        <div className="service-form-top-level-content-container">
          <section className="service-form-progress-section-container">
            <span className="service-form-progress-step">Step {this.state.step}</span>
            <div className="service-form-progress-bar">
              <span style={style}></span>
            </div>
          </section>
          <section className="service-form-content-main-container">
            <form className="service-form-shared-form">
              {this.renderStep()}
            </form>
          </section>
        </div>
      </section>
    )
  }

}


export default ServiceForm;

import React from 'react'


var projectFields = {
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

// need formErrors

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

  componentWillMount(){
    this.props.clearFormErrors();
    projectFields = {
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

  }

  saveValues(values){
    projectFields = Object.assign({}, projectFields, values)
  }

  nextStep(){
    this.setState({step: this.state.step + 1})
  }

  previousStep(){
    this.setState({step: this.state.step - 1})
  }

  renderStep(){
    switch(this.state.step){
      case 1:
        return (
          <ServiceFormProjectName />
        )
      case 2:
        return (
          <ServiceFormProjectDetails />
        )
      case 3:
        return (
          <ServiceFormMoreProjectDetails />
        )
      case 4:
        return (
          <ServiceFormPreferences />
        )
    }
  }

  render() {
    var style = {
      width = (this.state.step / 4 * 100) + '%'
    }
    return (
      <section className="service-form-page-container">
        <section className="service-form-progress-section-container">
          <span className="service-form-progress-step">Step {this.state.step}</span>
          <progess className="service-form-progress-bar" style={style}></progess>
        </section>
        <section className="service-form-content-main-container">
          {this.renderStep()}
        </section>
      </section>
    )
  }

}


export default ServiceForm;

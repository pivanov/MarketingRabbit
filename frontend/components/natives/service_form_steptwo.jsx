import React from 'react'
import VirtualizedSelect from 'react-virtualized-select';
import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'

class ServiceFormStepTwo extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      service_needed_id: ""
    }

    this.nextStep = this.nextStep.bind(this)
    this.previousStep = this.previousStep.bind(this)
  }

  componentDidMount(){
    this.setState({service_needed_id: this.props.projectFields.service_needed_id})
  }

  nextStep(e){
    e.preventDefault()
    var data = {
      service_needed_details: this.serviceNeededDetails.value,
      service_needed_id: this.state.service_needed_id
    }
    this.props.saveValues(data)
    this.props.nextStep()
  }

  previousStep(e){
    e.preventDefault()
    var data = {
      service_needed_details: this.serviceNeededDetails.value,
      service_needed_id: this.state.service_needed_id
    }
    this.props.saveValues(data)
    this.props.previousStep()

  }

  render() {
    const services = this.props.services.map((service) => {
      return {value: service.id, label: service.name}
    })

    return(
      <div className="service-form-steps-container">
        <div className="service-form-steps-content-container">
          <div className="service-form-steps-main-content">
            <label htmlFor="serviceneeded">What service do you need?</label>
            <br/>
            <VirtualizedSelect autoFocus options={services} clearable={false} value={this.state.service_needed_id} className="steptwo-service-options-bar" onChange={val=>(this.setState({service_needed_id: val.value}))}/>
            <label htmlFor="projectdescription">Please describe your project</label>
            <textarea id="projectdescription" ref={(input)=>this.serviceNeededDetails=input} defaultValue={this.props.projectFields.service_needed_details} placeholder="My company is situated in Mexico City, Mexico and we are looking for..."/>
          </div>
          <div className="steps-buttons-container">
            <button onClick={this.previousStep}>Back</button>
            <button onClick={this.nextStep}>Continue</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ServiceFormStepTwo

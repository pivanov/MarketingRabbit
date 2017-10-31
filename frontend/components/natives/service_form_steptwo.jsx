import React from 'react'
import VirtualizedSelect from 'react-virtualized-select';
import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'

class ServiceFormStepTwo extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      service_needed: ""
    }

    this.nextStep = this.nextStep.bind(this)
    this.previousStep = this.nextStep.bind(this)
  }

  nextStep(e){
    e.preventDefault()
    var data = {

    }
  }

  previousStep(e){
    e.preventDefault()
    var data = {

    }
  }


  render() {
    return(
      <div className="service-form-steps-container">
        <div className="service-form-steps-content-container">
          <div className="service-form-steptwo-main-content">
            <label htmlFor="serviceneeded">What service do you need?</label>
            <br/>
            <VirtualizedSelect autoFocus clearable={false} className="steptwo-service-options-bar" onChange={val=>(this.setState({service_needed: val.value}))}/>
            <label htmlFor="projectdescription">Please describe your project</label>
            <textarea id="projectdescription" defaultValue={this.props.projectFields.service_needed_details} autofocus={true} placeholder="My company is situated in Mexico City, Mexico and we are looking for..."/>
          </div>
          <div className="steptwo-buttons-container">
            <button onClick={this.previousStep}>Back</button>
            <button onClick={this.nextStep}>Continue</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ServiceFormStepTwo

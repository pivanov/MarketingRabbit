import React from 'react'

class ServiceFormStepOne extends React.Component{
  constructor(props){
    super(props)

    this.nextStep = this.nextStep.bind(this)
  }

  nextStep(e){
    e.preventDefault()
    var data = {
      project_name: this.projectname.value
    }

    this.props.saveValues(data)
    this.props.nextStep()
  }

  render() {
    return(
      <div className="service-form-steps-container">
        <h1>Let's get started</h1>
        <div className="service-form-steps-content-container">
          <div className="service-form-steps-main-content">
            <label htmlFor="projectname">What will be the name of this project?</label>
            <p>try to be as descriptive as possible</p>
            <br/>
            <input id="projectname" type="text" ref={(input)=>this.projectname=input} defaultValue={this.props.projectFields.project_name}/>
          </div>
          <div className="stepone-button-container">
            <button onClick={this.nextStep}>Continue</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ServiceFormStepOne

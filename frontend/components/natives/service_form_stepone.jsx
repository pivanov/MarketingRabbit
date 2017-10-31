import React from 'react'

class ServiceFormStepOne extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
    return(
      <div className="service-from-stepone-container">
        <h1>Let's get started</h1>
        <div className="service-from-stepone-content-container">
          <div className="service-form-stepone-main-content">
            <label htmlFor="projectname">What will be the name of this project?</label>
            <br/>
            <input id="projectname" type="text" />
          </div>
          <div className="stepone-button-container">
            <button>Continue</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ServiceFormStepOne

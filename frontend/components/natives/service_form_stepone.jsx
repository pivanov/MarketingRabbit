import React from 'react'

class ServiceFormStepOne extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
    return(
      <div>
        <h1>Let's get started</h1>
        <label htmlFor="projectname">What will be the name of this project?</label>
        <input id="projectname" type="text" />
      </div>
    )
  }
}

export default ServiceFormStepOne

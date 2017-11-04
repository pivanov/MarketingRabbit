import React from 'react'

class AgencyRegisterStepThree extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      email: "",
      password: ""
    }

    this.nextStep = this.nextStep.bind(this)
    this.handleVerticals = this.handleVerticals.bind(this)
    this.handleServices = this.handleServices.bind(this);
  }

  nextStep(e){
    e.preventDefault()
    const data = {
      email: "",
      password: ""
    }
    this.props.saveValues(data)
    this.props.handleSubmit()
  }

  handleVerticals(vals){
    let ids = vals.map((obj)=>{
      return obj.value
    })
    this.setState({vertical_ids: ids})
  }

  handleServices(vals){
    let ids = vals.map((obj)=>{
      return obj.value
    })
    this.setState({service_ids: ids})
  }

  render(){
    return(
      <div>
        <h1>hello</h1>
      </div>
    )
  }
}


export default AgencyRegisterStepThree

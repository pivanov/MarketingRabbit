import React from 'react'
import VirtualizedSelect from 'react-virtualized-select';
import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css';
import 'react-virtualized-select/styles.css';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

class AgencyRegisterStepOne extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      organization: "default",
      website: "default",
      agency_type: "full-service",
      service_ids: "default"
    }

    this.nextStep = this.nextStep.bind(this)
    this.handleIds = this.handleIds.bind(this)
    this.handleAgencyTypeRadios = this.handleAgencyTypeRadios.bind(this)
  }

  showInputError(){
    function isEmpty(el){
      return el.length == 0
    }

    if(Object.values(this.state).some(isEmpty)){
      return (
        <p>All fields are required</p>
      )
    }
  }

  nextStep(e){
    e.preventDefault()
    const data = {
      organization: this.organization.value,
      website: this.website.value,
      agency_type: this.state.agency_type,
      service_ids: this.state.service_ids
    }
    let dataKeys = Object.keys(data)
    let errors = 0
    dataKeys.forEach((key)=>{
      if(eval(`data.${key}`).length == 0 || eval(`data.${key}`) == "default"){
        data[key] = ""
        errors += 1
      }
    })
    this.setState(data)
    if(errors == 0){
      this.props.saveValues(data)
      this.props.nextStep()
    }
  }

  handleIds(vals, key){
    let ids = vals.map((obj)=>{
      return obj.value
    })
    this.setState({[key]: ids})
  }

  handleAgencyTypeRadios(v){
    this.setState({agency_type: v})
  }

  render(){
    const services = this.props.services.map((service)=>{
      return {value: service.id, label: service.name}
    })

    return(
      <div>
        <h1>Tell us a little about your agency</h1>
        <form className="agency-register-steptwo-form" onSubmit={this.nextStep}>
          <section className="agency-register-steptwo-content-container">
            <label>What is the name of your agency?</label>
            <input type="text" ref={input=>this.organization = input} defaultValue={this.props.agencyFields.organization}/>
            <label>Website</label>
            <input type="text" ref={input=>this.website = input} defaultValue={this.props.agencyFields.website}/>
            <label>Is your agency full-service or specialized?</label>
            <div>
              <RadioGroup onChange={this.handleAgencyTypeRadios} value={`${this.props.agencyFields.agency_type}`} horizontal>
                <RadioButton value="full-service" pointColor="#ff5722">
                  full-service
                </RadioButton>
                <RadioButton value="specialized" pointColor="#ff5722">
                  specialized
                </RadioButton>
              </RadioGroup>
            </div>
            <label>What service(s) does your agency provide?</label>
            <VirtualizedSelect multi={true} autoFocus clearable={false} options={services} value={this.state.service_ids} onChange={vals=>(this.handleIds(vals, "service_ids"))}/>
          </section>
          <button>Continue</button>
          {this.showInputError()}
        </form>
      </div>
    )
  }
}


export default AgencyRegisterStepOne

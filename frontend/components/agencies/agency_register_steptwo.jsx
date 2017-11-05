import React from 'react';
import VirtualizedSelect from 'react-virtualized-select';
import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css';
import 'react-virtualized-select/styles.css';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

class AgencyRegisterStepTwo extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      city_ids: "default",
      sector_ids: "default",
      industry_ids: "default",
      business_type_served: "B2B",
      minimum_project_size: "default"
    }

    this.nextStep = this.nextStep.bind(this)
    this.handleIds = this.handleIds.bind(this)
    this.handleBusinessTypeRadios = this.handleBusinessTypeRadios.bind(this)
    this.previousStep = this.previousStep.bind(this)
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
      city_ids: this.state.city_ids,
      sector_ids: this.state.sector_ids,
      industry_ids: this.state.industry_ids,
      business_type_served: this.state.business_type_served,
      minimum_project_size: this.state.minimum_project_size
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

  previousStep(e){
    e.preventDefault()
    const data = {
      city_ids: this.state.city_ids,
      sector_ids: this.state.sector_ids,
      industry_ids: this.state.industry_ids,
      business_type_served: this.state.business_type_served,
      minimum_project_size: this.state.minimum_project_size
    }
    this.props.saveValues(data)
    this.props.previousStep()
  }

  handleIds(vals, key){
    let ids = vals.map((obj)=>{
      return obj.value
    })
    this.setState({[key]: ids})
  }

  handleBusinessTypeRadios(v){
    this.setState({business_type_served: v})
  }

  render(){
    const sectors = this.props.sectors.map((sector)=>{
      return {value: sector.id, label: sector.name}
    })

    const cities = this.props.cities.map((city)=>{
      return {value: city.id, label: `${city.name}` + ", " + `${city.country}`}
    })

    const industries = this.props.industries.map((industry)=>{
      return {value: industry.id, label: industry.name}
    })

    const cost_options = [
      {value: "500", label: 'under $1000'},
      {value: "1500", label: '$1000 - $2000'},
      {value: "2500", label: '$2001 - $3000'},
      {value: "3500", label: '$3001 - $4000'},
      {value: "4500", label: '$4001 - $5000'},
      {value: "5500", label: '$5001 and up'}
    ]

    return(
      <div>
        <h1>Tell us a little about your agency</h1>
        <form className="agency-register-steptwo-form" onSubmit={this.nextStep}>
          <section className="agency-register-steptwo-content-container">
            <label>Where is your agency located?</label>
            <VirtualizedSelect multi={true} autoFocus clearable={false} options={cities} value={this.state.city_ids} onChange={vals=>(this.handleIds(vals, "city_ids"))}/>
            <label>Which business sector(s) does your agency serve?</label>
            <VirtualizedSelect multi={true} autoFocus clearable={false} options={sectors} value={this.state.sector_ids} onChange={vals=>(this.handleIds(vals, "sector_ids"))}/>
            <label>Which industry(ies) does your agency mainly serve?</label>
            <VirtualizedSelect multi={true} autoFocus clearable={false} options={industries} value={this.state.industry_ids} onChange={vals=>(this.handleIds(vals, "industry_ids"))}/>
            <label>Which type of business does your agency serve?</label>
            <div>
              <RadioGroup onChange={this.handleBusinessTypeRadios} value={`${this.props.agencyFields.business_type_served}`} horizontal>
                <RadioButton value="B2B" pointColor="#ff5722">
                  B2B
                </RadioButton>
                <RadioButton value="B2C" pointColor="#ff5722">
                  B2C
                </RadioButton>
                <RadioButton value="BOTH" pointColor="#ff5722">
                  Both
                </RadioButton>
              </RadioGroup>
            </div>
            <label>What is the minimum monthly cost for a service from your agency?</label>
            <VirtualizedSelect autoFocus clearable={false} options={cost_options} value={this.state.minimum_project_size} onChange={val=>(this.setState({minimum_project_size: val.value}))}/>
          </section>
          <button onClick={this.previousStep}>Back</button>
          <button>Continue</button>
          {this.showInputError()}
        </form>
      </div>
    )
  }
}


export default AgencyRegisterStepTwo

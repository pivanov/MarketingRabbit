import React from 'react'
import VirtualizedSelect from 'react-virtualized-select';
import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'

class AgencyRegisterStepTwo extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      vertical_ids: "default",
      service_ids: "default",
      city_ids: "default",
      business_type_served: "default",
      minimum_project_size: "default"
    }

    this.nextStep = this.nextStep.bind(this)
    this.handleIds = this.handleIds.bind(this)
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
      vertical_ids: this.state.vertical_ids,
      service_ids: this.state.service_ids,
      city_ids: this.state.city_ids,
      business_type_served: this.state.business_type_served,
      minimum_project_size: this.state.minimum_project_size
    }
    let dataKeys = Object.keys(data)
    let errors = 0
    dataKeys.forEach((key)=>{
      if(eval(`data.${key}`).length == 0 || eval(`data.${key}`) == "default"){
        data[key] = []
        errors += 1
      }
    })
    debugger
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
    debugger
    this.setState({[key]: ids})
  }

  render(){
    const sectors = this.props.sectors.map((sector)=>{
      return {value: sector.id, label: sector.name}
    })

    const cities = this.props.cities.map((city)=>{
      return {value: city.id, label: `${city.name}` + ", " + `${city.country}`}
    })

    const services = this.props.services.map((service)=>{
      return {value: service.id, label: service.name}
    })

    return(
      <div>
        <h1>Tell us a little more about your agency</h1>
        <form className="agency-register-steptwo-form" onSubmit={this.nextStep}>
          <section className="agency-register-steptwo-content-container">
            <label>Which verticals does your agency mainly work with?</label>
            <VirtualizedSelect multi={true} autoFocus clearable={false} className="agency-signup-step-two-bars" options={sectors} value={this.state.vertical_ids} onChange={vals=>this.handleIds(vals, "vertical_ids")}/>
            <label>Which services does you agency provide?</label>
            <VirtualizedSelect multi={true} autoFocus clearable={false} className="agency-signup-step-two-bars" options={services} value={this.state.service_ids} onChange={vals=>this.handleIds(vals, "service_ids")}/>
            <label>Where is your agency located?</label>
            <VirtualizedSelect multi={true} autoFocus clearable={false} className="agency-signup-step-two-bars" options={cities} value={this.state.city_ids} onChange={vals=>this.handleIds(vals, "city_ids")}/>
            <label>Which market does your agency serve?</label>
            <VirtualizedSelect multi={true} autoFocus clearable={false} className="agency-signup-step-two-bars" options={cities} value={this.state.city_id} onChange={val=>this.setState({city_id: val.value})}/>
          </section>
          <button>Submit</button>
          {this.showInputError()}
        </form>
      </div>
    )
  }
}


export default AgencyRegisterStepTwo

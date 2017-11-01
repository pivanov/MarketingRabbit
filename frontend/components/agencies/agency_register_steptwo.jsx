import React from 'react'
import VirtualizedSelect from 'react-virtualized-select';
import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'

class AgencyRegisterStepTwo extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      vertical_ids: [],
      service_ids: [],
      city_id: "",
      password: ""
    }

    this.nextStep = this.nextStep.bind(this)
    this.handleVerticals = this.handleVerticals.bind(this)
    this.handleServices = this.handleServices.bind(this);
  }

  nextStep(e){
    e.preventDefault()
    const data = {
      vertical_ids: this.state.vertical_ids,
      service_ids: this.state.service_ids,
      city_id: this.state.city_id,
      password: this.password.value
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
      <div className="agency-register-steptwo-container">
        <section className="agency-register-steptwo-main-content-container">
          <div className="agency-register-steptwo-third-level-container">
            <h1>Tell us a little more about your agency</h1>
            <form className="agency-register-steptwo-form" onSubmit={this.nextStep}>
              <section className="agency-register-steptwo-content-container">
                <label>Which verticals does your agency mainly work with?</label>
                <VirtualizedSelect multi={true} autoFocus clearable={false} className="agency-signup-step-two-bars" options={sectors} value={this.state.vertical_ids} onChange={vals=>this.handleVerticals(vals)}/>
                <label>Which services does you agency provide?</label>
                <VirtualizedSelect multi={true} autoFocus clearable={false} className="agency-signup-step-two-bars" options={services} value={this.state.service_ids} onChange={vals=>this.handleServices(vals)}/>
                <label>Where is your agency located</label>
                <VirtualizedSelect autoFocus clearable={false} className="agency-signup-step-two-bars" options={cities} value={this.state.city_id} onChange={val=>this.setState({city_id: val.value})}/>
                <label>Choose a password for your account </label>
                <input type="password" ref={(input)=>this.password=input} placeholder="Password"/>
              </section>
              <button>Submit</button>
            </form>
          </div>
        </section>
      </div>
    )
  }
}


export default AgencyRegisterStepTwo

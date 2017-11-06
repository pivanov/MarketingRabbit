import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import VirtualizedSelect from 'react-virtualized-select';
import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css';
import 'react-virtualized-select/styles.css';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

// last two imports are for select-drop-down package
// need css-loader and style-loader in webpack

class BusinessSignUpOne extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      firstname: "default",
      lastname: "default",
      organization: "default",
      industry_id: "default",
      business_type: "B2B"
    }

    this.nextStep = this.nextStep.bind(this)
    this.handlIds = this.handlIds.bind(this)
    this.handleBusinessTypeRadios = this.handleBusinessTypeRadios.bind(this)
    this.showInputError = this.showInputError.bind(this)
  }

  componentWillMount(){
    this.props.clearRegistrationErrors();
    this.setState({industry_id: this.props.inputFields.industry_id,
                  business_type: this.props.inputFields.business_type})

  }

  showInputError(field){
    if(eval(`this.state.${field}.length`) == 0){
      return(
        <p>This field is required</p>
      )
    }
  }

  nextStep(e){
    e.preventDefault()
    var data ={
      firstname: this.firstname.value,
      lastname: this.lastname.value,
      organization: this.organization.value,
      industry_id: this.state.industry_id,
      business_type: this.state.business_type
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

  handleBusinessTypeRadios(v){
    this.setState({business_type: v, industries_served_ids: []})
  }

  // renderServedIndustriesDropdown(){
  //   const industries = this.props.industries.map((industry)=>{
  //     return {value: industry.id, label: industry.name}
  //   })
  //   if(this.state.business_type == 'B2B'){
  //     return(
  //       <div>
  //         <label htmlFor="industry">Which industries does your business mainly serve?</label>
  //         <VirtualizedSelect multi={true} autoFocus clearable={false} className="business-industry-options-bar" options={industries} value={this.state.industries_served_ids} onChange={vals=>(this.handlIds(vals))}/>
  //       </div>
  //     )
  //   }
  // }

  handlIds(vals){
    let industriesIds = vals.map((obj)=>{
      return obj.value
    })
    this.setState({industries_served_ids: industriesIds})
  }

  render() {
    const industries = this.props.industries.map((industry)=>{
      return {value: industry.id, label: industry.name}
    })

    return (
        <form className="sharedForm">
          <div className="full-name-container-business">
            <div className="first-name-container">
              <label htmlFor="firstname">First Name</label>
              <input ref={(input)=>this.firstname=input} id="firstname" placeholder="First name" type="text" defaultValue={this.props.inputFields.firstname}/>
              {this.showInputError("firstname")}
            </div>

            <div className="last-name-container">
              <label htmlFor="lastname">Last Name</label>
              <input ref={(input)=>this.lastname=input} id="lastname" placeholder="Last name" type="text" defaultValue={this.props.inputFields.lastname}/>
              {this.showInputError("lastname")}
            </div>
          </div>
          <br />
          <label htmlFor="organization">Business Name</label>
          <input ref={(input)=>this.organization=input} id="organization" placeholder="Business name" type="text" defaultValue={this.props.inputFields.organization}/>
          {this.showInputError("organization")}
          <br />
          <label>Is your business B2B or B2C?</label>
          <div className="business-type-radio-container">
            <RadioGroup onChange={this.handleBusinessTypeRadios} value={`${this.props.inputFields.business_type}`} horizontal>
              <RadioButton value="B2B" pointColor="#ff5722">
                B2B
              </RadioButton>
              <RadioButton value="B2C" pointColor="#ff5722">
                B2C
              </RadioButton>
            </RadioGroup>
          </div>
          <br />
          <label htmlFor="industry">Industry</label>
          <VirtualizedSelect autoFocus clearable={false} className="business-industry-options-bar" options={industries} value={this.state.industry_id} onChange={val=>(this.setState({industry_id: val.value}))}/>
          {this.showInputError("industry_id")}
          <button onClick={this.nextStep} className="submitButton">Continue</button>
      </form>
    )
  }

}


export default withRouter(BusinessSignUpOne);

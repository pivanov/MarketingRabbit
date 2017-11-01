import React from 'react'
import VirtualizedSelect from 'react-virtualized-select';
import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'
import { RadioGroup, RadioButton } from 'react-radio-buttons';
// last three imports are for select-drop-down package
// need css-loader and style-loader in webpack

class BusinessSignUpTwo extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      industries_served_ids: [],
      business_type: "B2B"
    }
    // this.state = Object.assign({}, this.props.inputFields)
    // this.handleInput = this.handleInput.bind(this)
    this.nextStep = this.nextStep.bind(this)
    this.previousStep = this.previousStep.bind(this)
    this.handlIds = this.handlIds.bind(this)
    this.handleBusinessTypeRadios = this.handleBusinessTypeRadios.bind(this)
    this.renderServedIndustriesDropdown = this.renderServedIndustriesDropdown.bind(this)
    this.checkForField = this.checkForField.bind(this)
  }

  componentWillMount(){
    this.props.clearRegistrationErrors();
    this.props.inputFields.password = "",
    this.setState({industries_served_ids: this.props.inputFields.industries_served_ids, business_type: this.props.inputFields.business_type})
  }

  checkForField(fieldError, field){
    const errorFieldObject= eval(`this.props.errors.${fieldError}`);
    if (errorFieldObject){
      if(fieldError == "password"){
        return <p>{field + " " + this.props.errors[fieldError][0]}</p>
      } else if(fieldError == 'email' && this.props.errors[fieldError][0] !== 'has already been taken'){
        return <p>{field + " " + "is required"}</p>
      } else if (fieldError == "email"){
        return <p>{field + " " + this.props.errors[fieldError][0]}</p>
      } else {
        return <p>{field + " " + "is required"}</p>
      }

    }
  }

  nextStep(e){
    e.preventDefault()
    var data = {
      password: this.password.value,
      industries_served_ids: this.state.industries_served_ids,
      business_type: this.state.business_type
    }
    this.props.saveValues(data)
    this.props.handleSubmit()
  }

  previousStep(e){
    e.preventDefault()
    var data = {
      industries_served_ids: this.state.industries_served_ids,
      business_type: this.state.business_type
    }
    this.props.saveValues(data)
    this.props.previousStep()
  }

  handlIds(ids){
    this.setState({industries_served_ids: ids})
  }

  handleBusinessTypeRadios(v){
    this.setState({business_type: v, industries_served_ids: []})
  }

  renderServedIndustriesDropdown(){
    const industries = this.props.industries.map((industry)=>{
      return {value: industry.id, label: industry.name}
    })
    if(this.state.business_type == 'B2B'){
      return(
        <div>
          <label htmlFor="industry">Which industries does your business mainly serve?</label>
          <VirtualizedSelect multi={true} autoFocus clearable={false} className="business-industry-options-bar" options={industries} value={this.state.industries_served_ids} onChange={val=>(this.handlIds(val))}/>
        </div>
      )
    }
  }

  render(){

    return (
      <form className="sharedForm">
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
        {this.renderServedIndustriesDropdown()}
        <br/>
        <label htmlFor="password">Password</label>
        <input ref={(input)=>this.password=input} id="password" placeholder="Password" type="password" defaultValue={this.props.inputFields.password} />
        {this.checkForField('password', 'password')}
        <br />
        <div className="business-signup-steptwo-buttons-container">
          <button className="step-two-first-button" onClick={this.nextStep}>Submit</button>
          <button className="step-two-second-button" onClick={this.previousStep}>Back</button>
        </div>
      </form>
    )
  }

}


export default BusinessSignUpTwo

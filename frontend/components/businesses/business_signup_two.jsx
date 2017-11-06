import React from 'react'
import VirtualizedSelect from 'react-virtualized-select';
import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'

// last three imports are for select-drop-down package
// need css-loader and style-loader in webpack

class BusinessSignUpTwo extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      email: "",
      password: "",
      website: ""
    }
    // this.state = Object.assign({}, this.props.inputFields)
    // this.handleInput = this.handleInput.bind(this)
    this.nextStep = this.nextStep.bind(this)
    this.previousStep = this.previousStep.bind(this)
    this.checkForField = this.checkForField.bind(this)
  }

  componentWillMount(){
    this.props.clearRegistrationErrors();
    this.setState({password: ""})
  }

  checkForField(fieldError, field){
    const errorFieldObject= eval(`this.props.errors.${fieldError}`);
    if (errorFieldObject){
      if(fieldError == 'email'){
        return <p>This field is required</p>
      } else {
        return <p>{field + " " + this.props.errors[fieldError][0]}</p>
      }
    }
  }

  nextStep(e){
    e.preventDefault()
    var data = {
      password: this.password.value,
      email: this.email.value,
      website: this.website.value
    }
    this.props.saveValues(data)
    this.props.handleSubmit()
  }

  previousStep(e){
    e.preventDefault()
    var data = {
      email: this.email.value,
      password: this.password.value,
      website: this.website.value
    }
    this.props.saveValues(data)
    this.props.previousStep()
  }

  render(){

    return (
      <form className="sharedForm">
        <label htmlFor="website">Website</label>
        <input ref={(input)=>this.website=input} id="website" placeholder="https://your-website.com" type="text" defaultValue={this.props.inputFields.website} />
        {this.checkForField("website", "website")}
        <br />
        <label htmlFor="email">Business Email</label>
        <input ref={(input)=>this.email=input} id="email" placeholder="you@your-email.com" type="text" defaultValue={this.props.inputFields.email} />
        {this.checkForField("email", "email")}
        <br/>
        <label htmlFor="password">Password</label>
        <input ref={(input)=>this.password=input} id="password" placeholder="Password" type="password" defaultValue={this.state.password} />
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

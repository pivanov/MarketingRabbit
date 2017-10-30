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
      industries_served_ids: []
    }
    // this.state = Object.assign({}, this.props.inputFields)
    // this.handleInput = this.handleInput.bind(this)
    this.nextStep = this.nextStep.bind(this)
    this.handlIds = this.handlIds.bind(this)
  }

  componentWillMount(){
    this.props.clearRegistrationErrors();
    this.props.inputFields.password = ""
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
      password: this.password.value
    }
    this.props.saveValues(data)
    this.props.handleSubmit()
  }

  handlIds(ids){
    this.setState({industries_served_ids: ids})
  }

  render(){
    const industries = this.props.industries.map((industry)=>{
      return {value: industry.id, label: industry.name}
    })

    return (
      <form className="sharedForm">
        <label htmlFor="industry">Industry</label>
        <VirtualizedSelect multi={true} autoFocus clearable={false} className="business-industry-options-bar" options={industries} value={this.state.industries_served_ids} onChange={val=>(this.handlIds(val))}/>
        <br/>
        <label htmlFor="password">Password</label>
        <input ref={(input)=>this.password=input} id="password" placeholder="Password" type="password" defaultValue={this.props.inputFields.password} />
        {this.checkForField('password', 'password')}
        <br />
        <button onClick={this.nextStep}>Submit</button>
        <button onClick={this.props.previousStep}>Back</button>
      </form>
    )
  }

}


export default BusinessSignUpTwo

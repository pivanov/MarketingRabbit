import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import VirtualizedSelect from 'react-virtualized-select';
import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'

// last two imports are for select-drop-down package
// need css-loader and style-loader in webpack

class BusinessSignUpOne extends React.Component{
  constructor(props){
    super(props)
    // this.state = Object.assign({},this.props.inputFields)
    this.state ={
      industry_id: ""
    }

    // this.handleInput = this.handleInput.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
    this.nextStep = this.nextStep.bind(this)
  }

  componentWillMount(){
    this.props.clearRegistrationErrors();
    this.setState({industry_id: this.props.inputFields.industry_id})
  }

  // handleInput(field){
  //   return (e) => (
  //     this.setState({[field]: e.target.value})
  //   )
  // }

  // handleSubmit(e){
    // e.preventDefault();
    // this.props.registerBusiness(this.state).then(()=>this.props.history.push('/'))
    // this.props.registerBusiness(this.state)
    // this.setState({firstpart_completed: true})
  // }

  //
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
    var data ={
      firstname: this.firstname.value,
      lastname: this.lastname.value,
      organization: this.organization.value,
      industry_id: this.state.industry_id,
      email: this.email.value,
      website: this.website.value
    }
    this.props.saveValues(data)
    this.props.nextStep()
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
                {this.checkForField('firstname', 'first name')}
              </div>

              <div className="last-name-container">
                <label htmlFor="lastname">Last Name</label>
                <input ref={(input)=>this.lastname=input} id="lastname" placeholder="Last name" type="text" defaultValue={this.props.inputFields.lastname}/>
                {this.checkForField('lastname', 'last name')}
              </div>
            </div>
            <br />
            <label htmlFor="organization">Business Name</label>
            <input ref={(input)=>this.organization=input} id="organization" placeholder="Business name" type="text" defaultValue={this.props.inputFields.organization}/>
            {this.checkForField('organization', 'business name')}
            <br />
            <label htmlFor="industry">Industry</label>
            <VirtualizedSelect autoFocus clearable={false} className="business-industry-options-bar" options={industries} value={this.state.industry_id} onChange={val=>(this.setState({industry_id: val.value}))}/>

            <br />
            <label htmlFor="email">Business Email</label>
            <input ref={(input)=>this.email=input} id="email" placeholder="you@your-email.com" type="text" defaultValue={this.props.inputFields.email} />
            {this.checkForField('email', 'email')}
            <br />

            <label htmlFor="website">Website</label>
            <input ref={(input)=>this.website=input} id="website" placeholder="https://your-website.com" type="text" defaultValue={this.props.inputFields.website} />
            {this.checkForField('website', 'website')}
            <br />

            <button onClick={this.nextStep} className="submitButton">Continue</button>
        </form>
    )
  }

}


export default withRouter(BusinessSignUpOne);

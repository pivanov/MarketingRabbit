import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import BusinessSignUpOne from './business_signup_one';
import BusinessSignUpTwo from './business_signup_two'


var fieldValues = {
  firstname: "",
  lastname: "",
  organization: "",
  industry_id: "",
  email: "",
  password: "",
  website: ""
}

class BusinessSignUp extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      step: 1
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.filterFields = this.filterFields.bind(this)
    this.saveValues = this.saveValues.bind(this)
    this.nextStep = this.nextStep.bind(this)
    this.previousStep = this.previousStep.bind(this)
  }

  componentWillMount(){
    this.props.clearRegistrationErrors();
    fieldValues = {
        firstname: "",
        lastname: "",
        organization: "",
        industry_id: "",
        email: "",
        password: "",
        website: ""
    }
  }

  handleSubmit(){
    // e.preventDefault();
    this.props.registerBusiness(fieldValues).then(()=>this.props.history.push('/'))

  }

  saveValues(values){
    fieldValues = Object.assign({}, fieldValues, values)
  }


  nextStep(){
    this.props.registerBusiness(fieldValues)
      .then(()=>this.setState({step: this.state.step + 1}),
      (errors)=>{
        let errorsArray = Object.keys(errors.errors)
        if(errorsArray.length == 1){
          this.setState({step: this.state.step + 1})
        }
      })
  }

  previousStep(e){
    e.preventDefault();
    this.setState({step: this.state.step -1})
  }

  renderStep() {
    switch(this.state.step){
      case 1:
        return (
                <BusinessSignUpOne
                      inputFields={fieldValues}
                      nextStep={this.nextStep}
                      previousStep={this.previousStep}
                      clearRegistrationErrors={this.props.clearRegistrationErrors}
                      saveValues={this.saveValues}
                      industries={this.props.industries}
                      errors={this.props.errors}/>
        )
      case 2:
        return (
                <BusinessSignUpTwo
                      inputFields={fieldValues}
                      nextStep={this.nextStep}
                      previousStep={this.previousStep}
                      clearRegistrationErrors={this.props.clearRegistrationErrors}
                      saveValues={this.saveValues}
                      industries={this.props.industries}
                      errors={this.props.errors}
                      handleSubmit={this.handleSubmit}/>
        )

    }
  }

  filterFields(){
    const BusinessinputFields = ['firstname','lastname','organization',
                                  'industry_id','email','password','website']
    const stateKeys = Object.keys(this.state)
    const filteredKeys = stateKeys.filter((key)=>BusinessinputFields.includes(key))
    const newFieldsObject = filteredKeys.reduce((obj, key)=>{
      obj[key] = ""
      return obj
    }, {})
    return newFieldsObject;
  }

  render() {
    return (
      <div>
        {this.renderStep()}
      </div>
    )

  }

}


export default withRouter(BusinessSignUp);

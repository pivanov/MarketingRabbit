import React from 'react'
import { RadioGroup, RadioButton } from 'react-radio-buttons';

// REFACTOR THIS PAGE. MESSY FOR TESTING HAHA

class ServiceFormStepFour extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      location_preference: false,
      agency_preference: false
    }

    this.handleFirstRadioButtons = this.handleFirstRadioButtons.bind(this)
    this.handleSecondRadioButtons = this.handleSecondRadioButtons.bind(this)
    this.agencyPreferenceRadio = this.agencyPreferenceRadio.bind(this)
    this.renderFirstDropDown = this.renderFirstDropDown.bind(this)
    this.renderSecondDropDown = this.renderSecondDropDown.bind(this)
    this.nextStep = this.nextStep.bind(this)
    this.previousStep = this.previousStep.bind(this)
  }

  componentDidMount(){
    this.setState({location_preference: this.props.projectFields.location_preference,
                  agency_preference: this.props.projectFields.agency_preference,
                  agency_type_preference: this.props.projectFields.agency_type_preference})
  }

  handleFirstRadioButtons(value){
    let new_value;
    if(value=='true'){
      new_value = true
    }else if(value=='false'){
      new_value = false
    }
    this.setState({location_preference: new_value});
  }

  handleSecondRadioButtons(value){
    let new_value;
    if(value=='true'){
      new_value = true
    }else if(value=='false'){
      new_value = false
    }
    this.setState({agency_preference: new_value});
  }

  agencyPreferenceRadio(value){
    this.setState({agency_type_preference: value})
  }

  renderFirstDropDown(){
    if(this.state.location_preference == true){
        return (
          <h1>Locations for agencies in database will go here</h1>
        )
    }
  }

  renderSecondDropDown(){
    if(this.state.agency_preference == true){
      return (
        <div className="agency-preference-radio-container">
          <RadioGroup onChange={this.agencyPreferenceRadio} value={`${this.props.projectFields.agency_type_preference}`}horizontal>
            <RadioButton value='full-service' pointColor='#ff5722'>
              Full-service
            </RadioButton>
            <RadioButton value='specialist' pointColor='#ff5722'>
              Specialist
            </RadioButton>
          </RadioGroup>
        </div>
      )
    }
  }

  previousStep(e){
    e.preventDefault()
    var data ={
      location_preference: this.state.location_preference,
      agency_preference: this.state.agency_preference,
      agency_type_preference: this.state.agency_type_preference
    }
    this.props.saveValues(data)
    this.props.previousStep()
  }

  nextStep(e){
    e.preventDefault()
    var data ={
      location_preference: this.state.location_preference,
      agency_preference: this.state.agency_preference,
      agency_type_preference: this.state.agency_type_preference
    }
    this.props.saveValues(data)
    this.props.handleSubmit()
  }

  render() {
    const current_state = this.state
    return(
      <div className="service-form-steps-container">
        <div className="service-form-steps-content-container">
          <div className="service-form-steps-main-content">
            <label>Do you have any agency location preferences?</label>
            <div className="radiobutton-container">
              <RadioGroup onChange={this.handleFirstRadioButtons} value={`${this.props.projectFields.location_preference}`}horizontal>
                <RadioButton value='false' pointColor='#313333'>
                  No
                </RadioButton>
                <RadioButton value='true' pointColor='#ff5722'>
                  Yes
                </RadioButton>
              </RadioGroup>
            </div>
            {this.renderFirstDropDown()}
            <br/>
            <label>Do you have any agency preferences? (full-service or specialist)</label>
            <div className="radiobutton-container">
              <RadioGroup onChange={this.handleSecondRadioButtons} value={`${this.props.projectFields.agency_preference}`} >
                <RadioButton value='false' pointColor='#313333'>
                  No
                </RadioButton>
                <RadioButton value='true' pointColor='#ff5722'>
                  Yes
                </RadioButton>
              </RadioGroup>
            </div>
            {this.renderSecondDropDown()}
          </div>
          <div className="steps-buttons-container">
            <button onClick={this.previousStep}>Back</button>
            <button onClick={this.nextStep}>Submit</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ServiceFormStepFour

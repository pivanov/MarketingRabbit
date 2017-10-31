import React from 'react'
import { RadioGroup, RadioButton } from 'react-radio-buttons';

class ServiceFormStepFour extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      location_preference: false
    }

    this.handleRadioButton = this.handleRadioButton.bind(this)
  }

  handleRadioButton(value){
    let new_value;
    if(value=='true'){
      new_value = true
    }else if(value=='false'){
      new_value = false
    }
    this.setState({location_preference: new_value});
  }

  renderDropDown(){
    if(this.state.location_preference == true){
        return (
          <h1>Works</h1>
        )
    }
  }

  render() {
    const current_state = this.state
    return(
      <div className="service-form-steps-container">
        <div className="service-form-steps-content-container">
          <div className="service-form-steps-main-content">
            <label>Do you have any agency location preferences?</label>
            <div className="radiobutton-container">
              <RadioGroup onChange={this.handleRadioButton} value="false" horizontal>
                <RadioButton value='false' pointColor='#ff5722'>
                  No
                </RadioButton>
                <RadioButton value='true' pointColor='#ff5722'>
                  Yes
                </RadioButton>
              </RadioGroup>
              {this.renderDropDown()}
            </div>
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

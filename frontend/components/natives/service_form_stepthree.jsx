import React from 'react'
import VirtualizedSelect from 'react-virtualized-select';
import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'

class ServiceFormStepThree extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      monthly_budget: ''
    }

    this.nextStep = this.nextStep.bind(this)
    this.previousStep = this.previousStep.bind(this)
  }

  componentDidMount(){
    this.setState({monthly_budget: this.props.projectFields.monthly_budget})
    this.setState({})
  }

  previousStep(e){
    e.preventDefault()
    var data = {
      project_start_date: this.project_start_date.value,
      monthly_budget: this.state.monthly_budget
    }
    this.props.saveValues(data)
    this.props.previousStep()
  }

  nextStep(e){
    e.preventDefault()
    var data = {
      project_start_date: this.project_start_date.value,
      monthly_budget: this.state.monthly_budget
    }
    this.props.saveValues(data)
    this.props.nextStep()
  }

  render() {
    const budget_options = [
      {value: 500, label: 'under $1000'},
      {value: 1500, label: '$1000 - $2000'},
      {value: 2500, label: '$2001 - $3000'},
      {value: 3500, label: '$3001 - $4000'},
      {value: 4500, label: '$4001 - $5000'},
      {value: 5500, label: '$5001 and up'}
    ]

    return(
      <div className="service-form-steps-container">
        <div className="service-form-steps-content-container">
          <div className="service-form-steps-main-content">
            <label htmlFor="projectstartdate">By when would you like this project to start?</label>
            <p>Please allow at least 3 days for processing</p>
            <br/>
            <div className="stepthree-date-container">
              <input type="date" id="projectstartdate" ref={(input)=>this.project_start_date = input} defaultValue={this.props.projectFields.project_start_date}/>
            </div>

            <label>What is your monthly budget?</label>
            <VirtualizedSelect autoFocus options={budget_options} clearable={false} value={this.state.monthly_budget} className="stepthree-budget-bar" onChange={val=>(this.setState({monthly_budget: val.value}))}/>
          </div>
          <div className="steps-buttons-container">
            <button onClick={this.previousStep}>Back</button>
            <button onClick={this.nextStep}>Continue</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ServiceFormStepThree

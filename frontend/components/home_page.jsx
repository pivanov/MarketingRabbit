import React from 'react';
import QueryResultItem from './query_result_item';
import findKey from 'lodash/findKey';
import { Link } from 'react-router-dom';


class HomePage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      query: ""
    }
    this.handleInput = this.handleInput.bind(this)
    this.renderDropDown = this.renderDropDown.bind(this)
    this.handleQueryInput = this.handleQueryInput.bind(this)
    this.filterServicesByQuery = this.filterServicesByQuery.bind(this)
    this.handleLeave = this.handleLeave.bind(this)
    this.findServiceId = this.findServiceId.bind(this)
  }

  handleInput(e){
    e.preventDefault()
    this.setState({query: e.target.value})
  }

  handleQueryInput(query){
    if(query.length == 1){
      return query.toUpperCase()
    }else{
      let firstLetter = query.charAt(0).toUpperCase()
      let otherLetters = query.slice(1).toLowerCase()
      let newQuery = firstLetter + otherLetters
      return newQuery
    }
  }

  filterServicesByQuery(services,query){
    let queryLength = query.length
    let filteredServices = services.filter(function(service){
      return service.includes(query)
    })
    return filteredServices
  }

  findServiceId(result){
    let serviceId;
    this.props.services.forEach((obj)=>{
      if (obj.name == result){
        serviceId = obj.id
      }
    })
    return serviceId
  }

  renderDropDown(){
    if(this.state.query.length != 0){
      const services = this.props.services.map((obj)=>{
        return obj.name
      })
      let modifiedQuery = this.handleQueryInput(this.state.query)
      let queryResults = this.filterServicesByQuery(services, modifiedQuery)
      let queryResultsList = queryResults.map((result)=>{
        let serviceId = this.findServiceId(result)
        return (
          <div key={serviceId}>
            <Link to={`/agency-search/${serviceId}`}>{result}</Link>
          </div>
        )
      })
      return (
        <div className="search-query-dropdown-container">
          {queryResultsList}
        </div>
      )
    }
  }

  handleLeave(){
    this.setState({query: ""})
  }

  render(){

    return(
      <div className="root-home-page-container">
        <div className="main-home-page-content-container">
          <section className="first-home-content-container">
            <div className="welcome-content-container">
              <div className="home-welcome-content">
                <h1>THINK DIFFERENTLY ABOUT WHO DOES YOUR MOST IMPORTANT PROJECTS</h1>
                <hr/>
                <div className="home-page-search-bar-container" onMouseLeave={this.handleLeave}>
                  <input placeholder="search.." type="search" onChange={this.handleInput} value={this.state.query}/>
                  {this.renderDropDown()}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default HomePage;

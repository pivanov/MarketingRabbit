import React from 'react';
import AgencyFirstForm from './agency_first_form';

class AgencyRegisterSplashPage extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div id="splash-agency-registration-page">
        <header class="splash-agency-header">
          <section class="splash-header-content-container">
            <h1 class="splash-header-jumbo-text">Register your agency</h1>
            <AgencyFirstForm />
          </section>
        </header>
      </div>
    )
  }
}

export default AgencyRegisterSplashPage;

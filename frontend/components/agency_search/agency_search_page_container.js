import { connect } from 'react-redux';
import AgencySearchPage from './agency_search_page';

const mapStateToProps = (state) => ({
  services: state.entities.services,
  cities: state.entities.cities,
  industries: state.entities.industries
})

const mapDispatchToProps = (dispatch) => ({
  
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AgencySearchPage)

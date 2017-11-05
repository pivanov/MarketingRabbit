import { connect } from 'react-redux';
import AgencyRegistrationProcess from './agency_registration_process';
import { registerAgency, receiveRegistrationErrors } from '../../actions/registration_actions'

const mapStateToProps = (state) => ({
  errors: state.errors.registration,
  cities: state.entities.cities,
  services: state.entities.services,
  sectors: state.entities.sectors,
  industries: state.entities.industries
})

const mapDispatchToProps = (dispatch) => ({
  registerAgency: (user) => dispatch(registerAgency(user)),
  clearRegistrationErrors: () => dispatch(receiveRegistrationErrors({}))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AgencyRegistrationProcess)

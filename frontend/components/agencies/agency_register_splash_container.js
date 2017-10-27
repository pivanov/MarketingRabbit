import { connect } from 'react-redux';
import AgencyRegisterSplashPage from './agency_register_splash_page';
import { registerAgency } from '../../actions/registration_actions'

const mapStateToProps = (state) => ({
  registrationErrors: state.errors.registration
})

const mapDispatchToProps = (dispatch) => ({
  registerAgency: (user) => dispatch(registerAgency(user)),
  clearRegistrationErrors: () => dispatch(receiveRegistrationErrors({}))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AgencyRegisterSplashPage)

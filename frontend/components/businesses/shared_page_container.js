import { connect } from 'react-redux';
import SharedPage from './shared_page';
import {login, receiveSessionErrors} from '../../actions/session_actions';
import { receiveRegistrationErrors, registerBusiness} from '../../actions/registration_actions';

const mapStateToProps = (state) => ({
  sessionErrors: state.errors.session,
  registrationErrors: state.errors.registration
});

const mapDispatchToProps = (dispatch) => ({
  registerBusiness: (user) => dispatch(registerBusiness(user)),
  login: (user) => dispatch(login(user)),
  clearSessionErrors: () => dispatch(receiveSessionErrors({})),
  clearRegistrationErrors: ()=> dispatch(receiveRegistrationErrors({}))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SharedPage)

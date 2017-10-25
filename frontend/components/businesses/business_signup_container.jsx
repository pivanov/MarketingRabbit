import { connect } from 'react-redux';
import BusinessSignUp from './business_signup';
import { registerBusiness } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  errors: state.errors.session
});

const mapDispatchToProps = (dispatch) => ({
  registerBusiness: (user) => dispatch(registerBusiness(user))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BusinessSignUp)

import { connect } from 'react-redux';
import SharedPage from './shared_page';
import { registerBusiness, login } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
  errors: state.errors.session
});

const mapDispatchToProps = (dispatch) => ({
  registerBusiness: (user) => dispatch(registerBusiness(user)),
  login: (user) => dispatch(login(user))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SharedPage)

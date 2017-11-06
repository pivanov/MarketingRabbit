import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import HomePage from './home_page';

const mapStateToProps = (state) => ({
  services: state.entities.services
})

export default connect(
  mapStateToProps,
  null
)(HomePage)

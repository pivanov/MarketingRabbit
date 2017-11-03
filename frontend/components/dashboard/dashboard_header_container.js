import { connect } from 'react-redux';
import DashboardHeader from './dashboard_header';
import {updateProject, createProject, fetchProject, fetchProjects} from '../../actions/project_actions'
import {logout} from '../../actions/session_actions'
const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
})


const mapDispatchToProps = (dispatch) => ({
  logout: ()=>dispatch(logout())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardHeader)

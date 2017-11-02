import { connect } from 'react-redux';
import Dashboard from './dashboard';
import {updateProject, createProject, fetchProject, fetchProjects} from '../../actions/project_actions'
import {logout} from '../../actions/session_actions'

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
})


const mapDispatchToProps = (dispatch) => ({
  logout: ()=>dispatch(logout()),
  updateProject: (project)=>dispatch(updateProject(project)),
  createProject: (project)=>dispatch(createProject(project)),
  fetchProject: (id) =>dispatch(fetchProject(id)),
  fetchProjects: (business_id)=>dispatch(fetchProjects(business_id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)

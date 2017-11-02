import { connect } from 'react-redux';
import ProjectsPage from './projects_page';
import { fetchProjects } from '../../actions/project_actions'

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  projects: state.entities.projects
})

const mapDispatchToProps = (dispatch) => ({
  fetchProjects: (business_id) => dispatch(fetchProjects(business_id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsPage)

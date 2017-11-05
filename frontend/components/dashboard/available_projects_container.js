import { connect } from 'react-redux';
import AvailableProjects from './available_projects';
import { fetchRelevantProjects } from '../../actions/project_actions';

const mapStateToProps = (state)=>({
  currentUser: state.session.currentUser,
  projects: state.entities.projects
});

const mapDispatchToProps = (dispatch)=>({
  fetchRelevantProjects: (agency_id)=>dispatch(fetchRelevantProjects(agency_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AvailableProjects)

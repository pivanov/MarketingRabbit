import { connect } from 'react-redux';
import ServiceForm from './service_form';
import { receiveProjectErrors, createProject } from '../../actions/project_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  projectErrors: state.errors.projects,
  services: state.entities.services
})


const mapDispatchToProps = (dispatch) => ({
  clearProjectErrors: () => dispatch(receiveProjectErrors([])),
  createProject: (project) => dispatch(createProject(project))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServiceForm)

import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import RegistrationErrorsReducer from './registration_errors_reducer';
import ProjectErrorsReducer from './project_errors_reducer';

const ErrorsReducer = combineReducers({
  session: SessionErrorsReducer,
  registration: RegistrationErrorsReducer,
  projects: ProjectErrorsReducer
});

export default ErrorsReducer;

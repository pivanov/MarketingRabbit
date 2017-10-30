import { combineReducers } from 'redux';
import SectorsReducer from './sectors_reducer';
import IndustriesReducer from './industries_reducer';
import ProjectsReducer from './projects_reducer';

const EntitiesReducer = combineReducers({
  sectors: SectorsReducer,
  industries: IndustriesReducer,
  projects: ProjectsReducer
});

export default EntitiesReducer;

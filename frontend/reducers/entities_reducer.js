import { combineReducers } from 'redux';
import SectorsReducer from './sectors_reducer';
import IndustriesReducer from './industries_reducer';
import ProjectsReducer from './projects_reducer';
import ServicesReducer from './services_reducer';
import CitiesReducer from './cities_reducer';

const EntitiesReducer = combineReducers({
  sectors: SectorsReducer,
  industries: IndustriesReducer,
  services: ServicesReducer,
  cities: CitiesReducer,
  projects: ProjectsReducer
});

export default EntitiesReducer;

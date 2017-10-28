import { combineReducers } from 'redux';
import SectorsReducer from './sectors_reducer';
import IndustriesReducer from './industries_reducer'

const EntitiesReducer = combineReducers({
  sectors: SectorsReducer,
  industries: IndustriesReducer
});

export default EntitiesReducer;

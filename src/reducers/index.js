import { combineReducers } from 'redux';
import userReducer from './user';

const rootReducer = combineReducers({
  // on ajoute la liste des reducers ici
  user: userReducer,
});

export default rootReducer;

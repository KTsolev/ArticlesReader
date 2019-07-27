import { createStore, combineReducers } from 'redux';
import articleReducer from '../reducers/articleReducer';

const rootReducer = combineReducers({
  places: articleReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;
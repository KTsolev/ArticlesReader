import { createStore, combineReducers, applyMiddleware } from 'redux';
import articleReducer from '../reducers/articleReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  articles: articleReducer
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
}

export default configureStore;

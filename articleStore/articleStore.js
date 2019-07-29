import { createStore, combineReducers, applyMiddleware } from 'redux';
import articleReducer from '../reducers/articleReducer';
import uiReducer from '../reducers/uiReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  articles: articleReducer,
  uiElementsState: uiReducer
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
}

export default configureStore;

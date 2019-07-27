import { 
  FETCH_ARTICLES,
  FETCH_STARTED, 
  FETCH_SUCCESS, 
  FETCH_FAILURE, 
  ADD_FILTER, 
  REMOVE_FILTER } from '../actions/actionTypes';

  const initialState  = {
    articles: [],
    filters: []
}

const articleReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_ARTICLES:
    break;
    case FETCH_STARTED:
    break;
    case FETCH_SUCCESS:
    break;
    case FETCH_FAILURE:
    break;
    case ADD_FILTER:
    break;
    case REMOVE_FILTER:
    break;
    default:
      return state;
  }
}

export default articleReducer;
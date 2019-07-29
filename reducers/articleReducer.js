import { 
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_STARTED,
  FETCH_ARTICLES_FAILURE,
  ADD_FILTER, 
  REMOVE_FILTER } from '../actions/actionTypes';

  const initialState  = {
    isLoading: false,
    articles: [],
    filters: [],
    error: null
}

const articleReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_ARTICLES_STARTED:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_ARTICLES_SUCCESS:
    let newArticles = Object.values(action.payload);
    let current = state.articles;
      return {
        isLoading: false,
        error: null,
        articles: [...current, ...newArticles]
      };
    case FETCH_ARTICLES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
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
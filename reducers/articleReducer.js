import { 
  FETCH_ARTICLES,
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
    case FETCH_ARTICLES:
    break;
    case FETCH_ARTICLES_STARTED:
      return {
        ...state,
        loading: true
      };
    case FETCH_ARTICLES_SUCCESS:
    let newArticles = Object.values(action.payload);
      return {
        ...state,
        loading: false,
        error: null,
        articles: [...state.articles, ...newArticles]
      };
    case FETCH_ARTICLES_FAILURE:
      return {
        ...state,
        loading: false,
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
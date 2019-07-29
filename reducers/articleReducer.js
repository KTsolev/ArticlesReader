import { 
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_STARTED,
  FETCH_ARTICLES_FAILURE,
  ADD_FILTER, 
  REMOVE_FILTER } from '../actions/actionTypes';

const initialState  = {
    isLoading: false,
    articles: [],
    filters: {},
    error: null
}

const articleReducer = (state = initialState, action) => {
  debugger;
  switch(action.type) {
    case FETCH_ARTICLES_STARTED:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_ARTICLES_SUCCESS:
    let newArticles = Object.values(action.payload);
    let currentArticles = state.articles;
      return {
        ...state,
        isLoading: false,
        error: null,
        articles: [...currentArticles, ...newArticles]
      };
    case FETCH_ARTICLES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    case ADD_FILTER:
      let currentFiters = state.filters;
      let newFilters = Object.assign({}, currentFiters, action.payload.filter);
      return {
        ...state,
        articles: [],
        filters: newFilters
      }
    case REMOVE_FILTER:
      return {
        ...state,
        filters: []
      }
    default:
      return state;
  }
}

export default articleReducer;
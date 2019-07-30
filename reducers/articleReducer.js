import { 
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_STARTED,
  FETCH_ARTICLES_FAILURE,
  ADD_FILTER,
  RESET_FILTER, 
  LOAD_MORE} from '../actions/actionTypes';

let initialState  = {
    isLoading: false,
    page: 0,
    articles: [],
    filters: {},
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
    let newArticles = state.articles.concat(Object.values(action.payload));
      return {
        ...state,
        isLoading: false,
        error: null,
        articles: [...newArticles]
      };
    case FETCH_ARTICLES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    case LOAD_MORE:
      let newPage = action.payload.page;
      return {
        ...state,
        page: newPage,
      };  
    case ADD_FILTER:
      let currentFiters = state.filters;
      let newFilters = Object.assign({}, currentFiters, action.payload.filter);
      
      if(newFilters.days !== 1 || newFilters.category !== 'all-section') {
        return {
          ...state,
          articles: [],
          filters: newFilters
        }
      } else {
        return {
          ...state,
          filters: newFilters
        }
      }
    case RESET_FILTER:
      return {
        ...state,
        filters: {}
      }
    default:
      return state;
  }
}

export default articleReducer;
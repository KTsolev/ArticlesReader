import {
    FETCH_ARTICLES_SUCCESS,
    FETCH_ARTICLES_STARTED,
    FETCH_ARTICLES_FAILURE,
    ADD_FILTER, 
    TOGGLE_FILTERS_OPTIONS,
    TOGGLE_POP_UP_MENU,
    LOAD_MORE,
    RESET_FILTER } from './actionTypes';
  
import axios from 'axios';
import { API_BASE_URL, API_KEY } from '../config';

export const fetchArticles = (days = 1, category = 'all-sections', page=0) => {
    return dispatch => {
      dispatch(fetchArticlesStarted());
      axios({
          method: 'get',
          url: `${API_BASE_URL}/mostpopular/v2/mostviewed/${category}/${days}.json?api-key=${API_KEY}&offset=${page*10}`,
          headers: {
            'Content-Type': 'application/json'
          },
          timeout: (5 * 1000)
      })
        .then(res => {
          return dispatch(fetchArticlesSuccess(res.data.results));
        })
        .catch(error => {
          return dispatch(fetchArticlesFailure(error));
        });
    };
  };

export const fetchArticlesSuccess = articles => ({
    type: FETCH_ARTICLES_SUCCESS,
    payload: {
      ...articles
    }
  });
  
export const fetchArticlesStarted = () => ({
    type: FETCH_ARTICLES_STARTED
  });
  
export const fetchArticlesFailure = error => ({
    type: FETCH_ARTICLES_FAILURE,
    payload: {
      error
    }
  });

export const showHidePopupMenu = (toggle) => {
  return dispatch => {
    dispatch(togglePopUpMenu(toggle));

  };
};  

export const showHideFiltersMenu = (toggle) => {
  return dispatch => {
    dispatch(toggleFiltersMenu(toggle));

  };
};  

export const addNewFilter = (filter) => {
  return dispatch => {
    dispatch(addFilter(filter));
  };
};  

export const getMoreArticles = (page) => {
  return dispatch => {
    dispatch(loadMore(page));
  };
};

export const resetAll = (page) => {
  return dispatch => {
    dispatch(resetFilter(page));
  };
};

export const togglePopUpMenu = (toggle) => ({
  type: TOGGLE_POP_UP_MENU,
  payload: {
    toggle,
  }
});

export const toggleFiltersMenu = (toggle) => ({
  type: TOGGLE_FILTERS_OPTIONS,
  payload: {
    toggle,
  }
});


export const addFilter = (filter) => ({
  type: ADD_FILTER,
  payload: {
    filter,
  }
});

export const loadMore = (page) => ({
  type: LOAD_MORE,
  payload: {
    page,
  }
});

export const resetFilter = (page) => ({
  type: RESET_FILTER,
  payload: {
    page,
  }
});
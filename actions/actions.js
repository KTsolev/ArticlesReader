import {
    FETCH_ARTICLES_SUCCESS,
    FETCH_ARTICLES_STARTED,
    FETCH_ARTICLES_FAILURE,
    ADD_FILTER, 
    FETCH_ARTICLES,
    TOGGLE_FILTERS_OPTIONS,
    TOGGLE_POP_UP_MENU,
    REMOVE_FILTER } from './actionTypes';
  
import axios from 'axios';
import { API_BASE_URL, API_KEY } from '../config';

export const fetchArticles = () => {
    return dispatch => {
      dispatch(fetchArticlesStarted());
  
      axios
        .get(`${API_BASE_URL}/mostviewed/all-sections/7.json?api-key=${API_KEY}`)
        .then(res => {
          dispatch(fetchArticlesSuccess(res.data.results));
        })
        .catch(err => {
          dispatch(fetchArticlesFailure(err.message));
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
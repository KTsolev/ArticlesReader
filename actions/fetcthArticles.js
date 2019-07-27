import { FETCH_ARTICLES } from './actionTypes';

export const fetchArticles = placeName => {
  return {
    type: FETCH_ARTICLES,
    payload: placeName
  }
}
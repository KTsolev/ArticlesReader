import {
  TOGGLE_FILTERS_OPTIONS,
  TOGGLE_POP_UP_MENU,
} from '../actions/actionTypes';


let initialState  = {
    showPopUpMenu: false,
    showFilters: false
}

const uiReducer = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_FILTERS_OPTIONS:
      return {
        ...state,
        showFilters: action.payload.toggle,
      };
    case TOGGLE_POP_UP_MENU:
      return {
        ...state, 
        showPopUpMenu: action.payload.toggle,
      };
    default:
      return state;
  }
}

export default uiReducer;
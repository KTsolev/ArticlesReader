import uiReducer from '../../reducers/uiReducer';
import {
    TOGGLE_FILTERS_OPTIONS,
    TOGGLE_POP_UP_MENU,
  }from '../../actions/actionTypes';
  
describe('uiReducer', () => {
    test('innitial state is correct', () => {
        const initialState  = {
            showPopUpMenu: false,
            showFilters: false
        }
        const action = { type: 'dummy_action' };    
        expect(uiReducer(undefined, action)).toEqual(initialState);
      });
    
      test('opens filter menu', () => {
        const action = { type: TOGGLE_FILTERS_OPTIONS, payload: {
            toggle: true,
        } };
        const expectedState = { 
            showPopUpMenu: false,
            showFilters: true 
        };

        expect(uiReducer(undefined, action)).toEqual(expectedState);
     });  

     test('closes filter menu', () => {
        const action = { type: TOGGLE_FILTERS_OPTIONS, payload: {
            toggle: false,
        } };
        const expectedState = { 
            showPopUpMenu: false,
            showFilters: false 
        };

        expect(uiReducer(undefined, action)).toEqual(expectedState);
     });  

     test('opens popup menu', () => {
        const action = { type: TOGGLE_POP_UP_MENU, payload: {
            toggle: true,
        } };
        const expectedState = { 
            showPopUpMenu: true,
            showFilters: false 
        };

        expect(uiReducer(undefined, action)).toEqual(expectedState);
     });  

     test('closes popup menu', () => {
        const action = { type: TOGGLE_POP_UP_MENU, payload: {
            toggle: false,
        } };
        const expectedState = { 
            showPopUpMenu: false,
            showFilters: false 
        };

        expect(uiReducer(undefined, action)).toEqual(expectedState);
     });
});


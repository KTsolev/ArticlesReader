import { 
    fetchArticles,
    showHidePopupMenu,
    showHideFiltersMenu,
    addNewFilter,
    getMoreArticles, 
    resetAll 
} from '../../actions/actions';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

describe('Tests for UI Reducer Actions', () => {
  let store;

  beforeEach(() => {
    const middlewares = [thunk]
    const mockStore = configureMockStore(middlewares)
    store = mockStore({})

  });
  
    describe('showHidePopupMenu', () => {
      test('Dispatches the correct action and payload, when popup is opened', () => {
        store.dispatch(showHidePopupMenu(true));
        expect(store.getActions()).toMatchSnapshot();
      });
    });

    describe('showHideFiltersMenu', () => {
        test('Dispatches the correct action and payload, when ui filters is opened', () => {
          store.dispatch(showHideFiltersMenu(true));
          expect(store.getActions()).toMatchSnapshot();
        });
      });
  });

  describe('Tests for Articles Reducer Actions', () => {
    let store;
  
    beforeEach(() => {
      const middlewares = [thunk]
      const mockStore = configureMockStore(middlewares)
      store = mockStore({})
  
    });
    
      describe('addNewFilter', () => {
        test('Dispatches the correct action and payload, when new filter for days back, has been added', () => {
          store.dispatch(addNewFilter({day: 7}));
          expect(store.getActions()).toMatchSnapshot();
        });  
        test('Dispatches the correct action and payload, when new filter for category, has been added', () => {
          store.dispatch(addNewFilter({category: 'Wine & Dining'}));
          expect(store.getActions()).toMatchSnapshot();
        }); 
        test('Dispatches the correct action and payload, when no filters, has been added', () => {
          store.dispatch(addNewFilter());
          expect(store.getActions()).toMatchSnapshot();
        });
      });
  
      describe('getMoreArticles', () => {
          test('Dispatches the correct action and payload, when getMoreArticles is dispatched', () => {
            store.dispatch(getMoreArticles({page: 2}));
            expect(store.getActions()).toMatchSnapshot();
          });
        });
    });
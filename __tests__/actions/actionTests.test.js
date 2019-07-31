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
import mockedData from '../../__mocks__/mockedData';
import mockAxios from 'jest-mock-axios';

describe('Tests for UI Reducer Actions', () => {
  let store;

  beforeEach(() => {
    const middlewares = [thunk]
    const mockStore = configureMockStore(middlewares)
    store = mockStore({})
  });

  afterEach(() => {
    mockAxios.reset();
  })
  
  describe('showHidePopupMenu', () => {
    test('Dispatches the correct action and payload, when popup is opened', () => {
      store.dispatch(showHidePopupMenu(true));
      expect(store.getActions()).toMatchSnapshot();
    });
  });

  describe('resetAll', () => {
      test('Dispatches the correct action and payload, when filters are reset', () => {
        store.dispatch(resetAll());
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
   
    describe('getMoreArticles', () => {
      test('Dispatches the correct action and payload, when getMoreArticles is dispatched', () => {
        store.dispatch(getMoreArticles({page: 2}));
        expect(store.getActions()).toMatchSnapshot();
      });
    });
    
    describe('fetchArticles', () => {
      test('Should successfully get data from server, when action is dispatch', () => {
        let catchFn = jest.fn();
        let thenFn = jest.fn();
        store.dispatch(fetchArticles());
        mockAxios.mockResponse({
          data: {
            results: mockedData
          }
        });
        console.log(store.getActions());
        expect(store.getActions()[0].type).toEqual('FETCH_ARTICLES_STARTED');
        expect(store.getActions()[1].type).toEqual('FETCH_ARTICLES_SUCCESS');        
        expect(Object.values(store.getActions()[1].payload)).toHaveLength(6);
      });
    });
    
    describe('fetchArticles', () => {
      test('Should not get any data from server, if error occurs, when action is dispatch', () => {
        let catchFn = jest.fn();
        let thenFn = jest.fn();
        store.dispatch(fetchArticles());
        mockAxios.mockError({
          error: {
            message: 'No connection'
          }
        });
        console.log(store.getActions());
        expect(store.getActions()[0].type).toEqual('FETCH_ARTICLES_STARTED');
        expect(store.getActions()[1].type).toEqual('FETCH_ARTICLES_FAILURE');        
        expect(Object.values(store.getActions()[1].payload)).toEqual([{'error': {'message': 'No connection'}}]);
      });
    });  
});

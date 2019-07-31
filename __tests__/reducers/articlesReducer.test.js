import articleReducer from '../../reducers/articleReducer';
import { 
    FETCH_ARTICLES_SUCCESS,
    FETCH_ARTICLES_STARTED,
    FETCH_ARTICLES_FAILURE,
    ADD_FILTER,
    RESET_FILTER, 
    LOAD_MORE 
} from '../../actions/actionTypes';

describe('articleReducer', () => {
    test('innitial state is correct', () => {
        const initialState  = {
            isLoading: false,
            page: 0,
            articles: [],
            filters: {},
            error: null
        }
        const action = { type: 'dummy_action' };    
        expect(articleReducer(undefined, action)).toEqual(initialState);
    });

    test('loading should be true, FETCH_ARTICLES_STARTED is recieved', () => {
        const action = { type: FETCH_ARTICLES_STARTED };    
        expect(articleReducer(undefined, action).isLoading).toBe(true);
    });

    test('loading should be false and error should be not null, FETCH_ARTICLES_FAILURE is recieved', () => {
        const action = { type: FETCH_ARTICLES_FAILURE, payload: { error: 'Error' } };
        const errorObj = {
            articles: [],
            error: 'Error',
            filters:  {},
            isLoading: false,
            page: 0,
        }
        expect(articleReducer(undefined, action)).toEqual(errorObj);
    });

    test('new data should be added successfully on FETCH_ARTICLES_SUCCESS is recieved', () => {
        const action = { type: FETCH_ARTICLES_SUCCESS, payload: ['item1', 'item2', 'item3', 'item4'] };
        expect(articleReducer(undefined, action).articles.length).toEqual(4);
    });

    test('new filter for days should be added successfully on ADD_FILTER is recieved', () => {
        const action = { type: ADD_FILTER, payload: {
            filter: {
                days: 5
            }
        } };
        expect(articleReducer(undefined, action).filters.days).toEqual(5);
    });

    test('new filter for category should be added successfully on ADD_FILTER is recieved', () => {
        const action = { type: ADD_FILTER, payload: {
            filter: {
                category: 'Wine & Dine'
            }
        } };
        expect(articleReducer(undefined, action).filters.category).toEqual('Wine & Dine');
        expect(articleReducer(undefined, action).articles.length).toEqual(0);

    });

    test('Articles should be same if there is no change in filters', () => {
        const action1 = { type: FETCH_ARTICLES_SUCCESS, payload: ['item1', 'item2', 'item3', 'item4'] };        
        let state = articleReducer(undefined, action1);
        
        const action2 = { type: ADD_FILTER, payload: {
            filter: {
                category: 'all-section',
                days: 1
            }
        } };
        expect(articleReducer(state, action2).articles.length).toEqual(4);


    });

    test('filter should be reset successfully on RESET_FILTER is recieved', () => {
        const action = { type: RESET_FILTER };
        expect(articleReducer(undefined, action).filters).toEqual({});
    });

    test('page should be set successfully on LOAD_MORE, is recieved', () => {
        const action = { type: LOAD_MORE, payload: { page: 4 } };
        expect(articleReducer(undefined, action).page).toEqual(4);
    });
});
import React from 'react';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { Divider } from 'react-native-elements';
import FiltersMenu from '../../components/FiltersMenu/FiltersMenu';
import { render, fireEvent } from 'react-native-testing-library';

const createTestProps = (props) => ({
    ...props
  });

describe('<FiltersMenu />', () => {
    let props;
    let middlewares;
    let mockStore;

    beforeEach(() => {
      props = createTestProps({});
      middlewares = [thunk];
      mockStore = configureMockStore(middlewares);
      
      props.store = mockStore({
          uiElementsState: {
              showFilters: false,
              showPopUpMenu: false
          },
          articles: {
              filters: {}
          }
      });
    });
    
    test('renders the component', () => {
        const { getByTestId, queryByText, queryAllByType } = render(<FiltersMenu {...props} />);
        expect(queryByText('Reset Filters')).not.toBeNull();
        expect(queryByText('Choose most popular articles for days back:')).not.toBeNull();
        expect(queryByText('Choose most category for articles')).not.toBeNull();
        expect(queryAllByType(Divider)).toHaveLength(4);
        expect(getByTestId('daysHolder')).not.toBeNull();
        expect(getByTestId('categoriesHolder')).not.toBeNull();
    });

  test('Dispatches the correct action and payload, when categories filter is clicked', () => {
      const { getByTestId } = render(<FiltersMenu {...props} />);
      fireEvent.press(getByTestId('Giving'));
      const expectedActions = [
          {
            payload: {
                filter: { 
                    category: 'Giving'
                  }
            },
            type: 'ADD_FILTER',
          },
        ];
    
        expect(props.store.getActions()).toEqual(expectedActions);
  });

  test('Dispatches the correct action and payload, when days filter is clicked', () => {
      const { getByTestId } = render(<FiltersMenu {...props} />);
      fireEvent.press(getByTestId('7'));
      const expectedActions = [
          {
            payload: {
                filter: { 
                    days: '7'
                  }
            },
            type: 'ADD_FILTER',
          },
        ];
    
        expect(props.store.getActions()).toEqual(expectedActions);
  });

  test('Dispatches the correct action and payload, when filter are reset', () => {
      const { getByTestId } = render(<FiltersMenu {...props} />);
      fireEvent.press(getByTestId('clearAll'));

      const expectedActions = [
          {
            payload: {},
            type: 'RESET_FILTER',
          },
        ];
    
      expect(props.store.getActions()).toEqual(expectedActions);
  });
    
});
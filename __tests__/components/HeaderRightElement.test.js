import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import thunk from 'redux-thunk';
import { TouchableOpacity } from 'react-native'
import { render, fireEvent } from 'react-native-testing-library';
import configureMockStore from 'redux-mock-store';
import HeaderRightElement from '../../components/HeaderRightElement/HeaderRightElement';
import { Provider } from 'react-redux';

const createTestProps = (props) => ({
    navigation: {
      navigate: jest.fn(),
      getParam: (name) => {
          if (name==='url') {
            return 'https://jestjs.io/';
          } 
          return null;
      }
    },
    ...props
  });

  describe('<HeaderRightElement />', () => {
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
        const wrapper = shallow(<HeaderRightElement {...props} />);
        const component = wrapper.dive();
        expect(toJson(component)).toMatchSnapshot();
    });

    test('Dispatches the correct action and payload, when filter are reset', () => {
        const { getAllByType } = render(<Provider store={props.store}><HeaderRightElement {...props} /></Provider>);
        fireEvent.press(getAllByType(TouchableOpacity)[0]);

        const expectedActions = [
            {
              payload: {
                  toggle: true
              },
              type: 'TOGGLE_POP_UP_MENU',
            },
          ];
      
        expect(props.store.getActions()).toEqual(expectedActions);
    });
      
});

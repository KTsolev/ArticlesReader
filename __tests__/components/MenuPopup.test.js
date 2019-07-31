import MenuPopup from '../../components/MenuPopup/MenuPopup';
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

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

describe('<MenuPopup />', () => {
    let props;
    let middlewares;
    let mockStore;
    const componentWillUnmount = jest.fn();
    const pressGestureHandler = jest.fn();

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
            },
            togglePopup: jest.fn(),
        });
    });
    
    test('renders the component', () => {
        const wrapper = shallow(<MenuPopup {...props}/>);
        const component = wrapper.dive();
        expect(toJson(component)).toMatchSnapshot();
    });

});
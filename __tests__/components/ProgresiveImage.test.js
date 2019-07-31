import ProgresiveImage from '../../components/ProgresiveImage/ProgresiveImage';
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { Animated } from 'react-native';
import { render, fireEvent } from 'react-native-testing-library';


const createTestProps = (props) => ({
    thumbnailSource: require('../../images/dummy-image.png'),
    source: 'https://tinyurl.com/y4lvzurm',
    ...props
  });

const onload = jest.fn(); 
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
describe('<ProgressiveImage />', () => {
    test('renders the component', () => {
        const wrapper = shallow(<ProgresiveImage  {...props} onLoad={onload} />);
        const component = wrapper.dive();
        expect(toJson(component)).toMatchSnapshot();
    });
});
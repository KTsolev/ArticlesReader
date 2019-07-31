import Loader from '../../components/Loader/Loader';
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('<Loader />', () => {
    test('renders the component', () => {
        const wrapper = shallow(<Loader />);
        const component = wrapper.dive();
        expect(toJson(component)).toMatchSnapshot();
    });
});
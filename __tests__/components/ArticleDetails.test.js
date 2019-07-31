import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

// Component to be tested
import ArticleDetails from '../../components/ArticleDetails/ArticleDetails';

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

  describe('<ArticleDetails />', () => {
      let props;
      beforeEach(() => {
        props = createTestProps({});
      });
      test('renders the component', () => {
          const wrapper = shallow(<ArticleDetails {...props} />);
          const component = wrapper.dive();
          expect(toJson(component)).toMatchSnapshot();
      });
  });
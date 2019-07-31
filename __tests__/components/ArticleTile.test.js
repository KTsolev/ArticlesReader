import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { render } from 'react-native-testing-library';
import ArticleTile from '../../components/ArticleTile/ArticleTile';


const createTestProps = (props) => ({
    article: {
        title: 'Miners Kill Indigenous Leader in Brazil During Invasion of Protected Land',
        abstract: 'Land invasions in indigenous territories are on the rise across Brazil. Indigenous leaders say they regularly come under threat by miners, loggers and farmers',
        published_date: '2019-07-27',
        url: 'https://www.nytimes.com/2019/07/27/world/americas/brazil-miners-amapa.html',
        byline: 'By ERNESTO LONDOÑO',
        media: [
            {
                'media-metadata': [
                    {
                        'url': 'https://static01.nyt.com/images/2019/07/27/world/Brazil-Indigenous/Brazil-Indigenous-square320.jpg',
                        'format': 'square320',
                        'height': 320,
                        'width': 320
                    },
                ]
            }
        ]
    },
    ...props
    });

describe('<ArticleTile />', () => {
    let props;
    
    beforeEach(() => {
        props = createTestProps({});
    });
    
    test('renders the component', () => {
        const wrapper = shallow(<ArticleTile {...props} />);
        const component = wrapper.dive();
        expect(toJson(component)).toMatchSnapshot();
    });
    test('renders the component check if props are applied', () => {
        const { queryByText } = render(<ArticleTile {...props} />);
        expect(queryByText(props.article.title)).not.toBeNull();
        expect(queryByText(props.article.abstract)).not.toBeNull();
        expect(queryByText(props.article.published_date)).not.toBeNull();
        expect(queryByText(props.article.byline)).not.toBeNull();
    });
});


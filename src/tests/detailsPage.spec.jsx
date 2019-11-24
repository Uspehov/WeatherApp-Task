import React from 'react';
import  { configure, shallow }  from 'enzyme';
import  { DetailsPage }  from '../components/cityDetailsPage/detailsPage';
import { WeatherData } from '../components/weatherData/weatherData';
import Loader from 'react-loader-spinner';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Details  Page', () => {
    const detailsPageProps = {
        isLoading: false,
        isError: false,
        data: {
            weather: [{
                data: 'sun',
                main: 'clear',
                wind: '4',
                description: 'good day'
            }],
            main: {
                humidity: 79,
                pressure: 1030,
                temp: 268.03,
                temp_max: 269.26,
                temp_min: 267.04
            },
            wind: {speed: 2, deg: 170}
        },
        getData: jest.fn(),
        cityName: 'Moscow'
    };

    it('should render', () => {
        const wrapper = shallow(<DetailsPage {...detailsPageProps}/>);
        wrapper.setState({ isLoading: false });
        expect(wrapper.debug()).toMatchSnapshot();
    });

    it('Loader should show if Pending', () => {
        const wrapper = shallow(<DetailsPage {...detailsPageProps} isLoading={true} />);
        expect(wrapper.find('.detailsPage-loader').length).toBe(1);
        expect(wrapper.find(Loader).length).toBe(1);
    });

    it('if error, proper messedge should appear', () => {
        const wrapper = shallow(<DetailsPage {...detailsPageProps} isError={true}/>);
        wrapper.setState({ isLoading: false });
        expect(wrapper.find('.error').length).toBe(1);
    });

    it('if data is missing, error messedge should appear', () => {
        const wrapper = shallow(<DetailsPage {...detailsPageProps} isLoading={true} />);
        expect(wrapper.find('.detailsPage-loader').length).toBe(1);
        expect(wrapper.find(Loader).length).toBe(1);
    });

    it('if everything is normal, should render WeatherData component', () => {
        const wrapper = shallow(<DetailsPage {...detailsPageProps}/>);
        wrapper.setState({ isLoading: false });
        expect(wrapper.find(WeatherData).length).toBe(1);
    })
});
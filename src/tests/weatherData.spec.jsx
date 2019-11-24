import React from 'react';
import { mount, configure } from 'enzyme';
import { WeatherData } from '../components/weatherData/weatherData';
import { BackToMainButton } from "../components/buttons/backToMain/backToMain";
import { BrowserRouter as Router } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Weather Data Page', () => {
    const weatherDataProps = {
        cityName: 'Moscow',
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
        }
    };

    it('should render', () => {
        const wrapper = mount(<Router><WeatherData {...weatherDataProps} /></Router>);
        expect(wrapper.debug()).toMatchSnapshot();
    });

    it('back to main button should be presented', () => {
        const wrapper = mount(<Router><WeatherData {...weatherDataProps} /></Router>);
        expect(wrapper.find(BackToMainButton).length).toBe(1);
    });
});
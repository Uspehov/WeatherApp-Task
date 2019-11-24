import React from 'react';
import  { mount, configure }  from 'enzyme';
import  { MainPage }  from '../components/mainPage/mainPage.jsx';
import { citiesArr } from '../js/constants/citiesList';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from "react-router-dom";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Main Page', () => {

    it('should render', () => {
        const wrapper = mount(<Router><MainPage /></Router>);
        expect(wrapper.debug()).toMatchSnapshot();
    });

    it('it should render proper number of buttons', () => {
        const wrapper = mount(<Router><MainPage /></Router>);
        expect(wrapper.find(Link).length).toBe(citiesArr.length);
    });
});
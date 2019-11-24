import React from 'react';
import  { shallow, configure }  from 'enzyme';
import { BackToMainButton } from "../components/buttons/backToMain/backToMain.jsx";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Baack to Main button', () => {

    it('should render', () => {
        const wrapper = shallow(<BackToMainButton />);
        expect(wrapper.debug()).toMatchSnapshot();
    });

});


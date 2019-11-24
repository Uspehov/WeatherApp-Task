import React from 'react';
import { Link } from "react-router-dom";
import { citiesArr } from '../../js/constants/citiesList';
import './mainPage.css';

export class MainPage extends React.Component {

    render() {
        return (
            <div className='mainPage-container'>
                <div className='mainPage-textContainer'>
                    <h1>Welcome</h1>
                    <span>Here you can check actual weather for following cities.</span>
                </div>
                <div className='mainPage-buttonsContainer'>
                    {citiesArr.map(item => (<Link key={item} to={`/${item}`} className='mainButton' >{item}</Link>))}
                </div>
            </div>
        );
    }
}

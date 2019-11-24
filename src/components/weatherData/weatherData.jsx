import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BackToMainButton } from '../buttons/backToMain/backToMain';
import { weatherValues } from '../../js/constants/weatherValues';
import './weatherData.css';

export class WeatherData extends Component {

    render() {
        const data = this.props.data;
        return (
            <div className='weatherData-container'>
                <h1>{this.props.cityName}</h1>
                <div >
                    <h3 className='weatherData-subtitle'>{data.weather[0].main}</h3>
                    <span>{data.weather[0].description}</span>
                    <div className='weatherData-columnContainer'>
                        <div className='weatherData-column'>{Object.keys(data.main).map((item) => <div key={item}>{item.charAt(0).toLocaleUpperCase() + item.slice(1).replace(/_/, '-')}</div>)}</div>
                        <div className='weatherData-column'>{Object.values(data.main).map((item, index) => <div key={item}>{item} {weatherValues[index]}</div>)} </div>
                    </div>
                    <h3 className='weatherData-subtitle'>Wind</h3>
                    <div className='weatherData-columnContainer'>
                        <div className='weatherData-column'>{Object.keys(data.wind)[0].charAt(0).toLocaleUpperCase() + Object.keys(data.wind)[0].slice(1)}</div>
                        <div className='weatherData-column'>{Object.values(data.wind)[0]} m/s</div>
                    </div>
                </div>
                <BackToMainButton />
            </div>
        );
    }
}

WeatherData.propTypes = {
    cityName: PropTypes.string,
    data: PropTypes.object
}
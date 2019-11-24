import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import { connect } from "react-redux";
import { getWeather } from '../../js/actions';
import { BackToMainButton } from '../buttons/backToMain/backToMain';
import { WeatherData } from '../weatherData/weatherData';
import getWeatherDataSelector from '../../js/selectors/index';
import { withRouter } from "react-router";
import './detailsPage.css';

export class DetailsPage extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }

    componentWillMount() {
        this.props.getData(this.props.cityName);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ isLoading: nextProps.isLoading });
    }

    render() {
        return (
            <div>
                {!this.state.isLoading ?
                    <div>
                        {!this.props.isError && this.props.data.weather ?
                            <div className={`detailsPage-container ${this.props.cityName.replace(/\s/g, '')}`}>
                                <WeatherData
                                    data={this.props.data}
                                    cityName={this.props.cityName}
                                    isLoading={this.props.isLoading}
                                />
                            </div>
                            :
                            <div className='detailsPage-loader error'>
                                <h1 className='white'>Ooops, something went wrong! Please try again later!</h1>
                                <BackToMainButton />
                            </div>
                        }
                    </div>
                    :
                    <div className='detailsPage-loader'>
                        <Loader
                            visible={this.state.isLoading}
                            type="Puff"
                            color="#00BFFF"
                            height={100}
                            width={100}
                        />
                    </div>
                }
            </div>
        );
    }
}

const makeMapStateToProps = () => {
    const uniqueWeatherData = getWeatherDataSelector();
    const mapStateToProps = (state, props) => {
        return {
            isLoading: state.isLoading,
            isError: state.isError,
            data: uniqueWeatherData(state, props),
        }
    }
    return mapStateToProps;
}

const mapDispatchToProps = (dispatch) => {
    return {
        getData: (cityName) => dispatch(getWeather(cityName))
    };
};

DetailsPage.propTypes = {
    isLoading: PropTypes.bool,
    isError: PropTypes.bool,
    data: PropTypes.object,
    cityName: PropTypes.string,
    getData: PropTypes.func
}

export default withRouter(connect(makeMapStateToProps, mapDispatchToProps)(DetailsPage));
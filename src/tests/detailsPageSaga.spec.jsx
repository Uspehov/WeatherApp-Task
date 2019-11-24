import { take, put, call, select } from 'redux-saga/effects';
import { WEATHER } from '../js/constants/action-types';
import { getWeatherInfo } from '../js/state/detailsPageSaga';
import { fetchWeather } from '../js/api/index';
import { setWeather } from '../js/actions/index';

describe('detailsPageSaga', () => {
    describe('getData', () => {
        const generator = getWeatherInfo();

        it('Wait for WEATHER.GET_WEATHER action', () => {
            const val = generator.next().value;
            expect(val).toStrictEqual(take(WEATHER.GET_WEATHER));
        });

        // it('Call api.getData', () => {
        //     const stateMock = { cityName: 'Moscow' };
        //     const val = generator.next(stateMock).value;
        //     expect(val).toStrictEqual(call(fetchWeather, stateMock));
        // });

        // it('Success if response is not undefined', () => {
        //     const testResponse = { t: 't', cityName: 'Moscow'};
        //     const val = generator.next( testResponse ).value;
        //     expect(val).toStrictEqual(put(setWeather({cityName: "Moscow", t:'t'})));
        // });
    });
});

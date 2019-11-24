import { all, put, call, take } from 'redux-saga/effects';
import { WEATHER } from '../constants/action-types';
import { fetchWeather } from '../api'
import { setWeather, failure } from '../actions'

export function* getWeatherInfo() {
    try {
        while (true) {
            const { payload } = yield take(WEATHER.GET_WEATHER);
            const result = yield call(fetchWeather, payload);
            if (result) {
                yield put(setWeather(payload, result));
            }
            else {
                yield put(failure());
            }
        }
    } catch (e) {
        console.error(e.toString());
    }
}

export function* rootSaga() {
    yield all([
        (getWeatherInfo())
    ]);
}

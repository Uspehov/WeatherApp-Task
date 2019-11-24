import { createSelector } from 'reselect'
import { formateData } from '../../js/helpers/dataFormatter';

const getData = (state, props) => state[props.cityName]

const getWeatherDataSelector = () => {
    return createSelector(
        [getData],
        (data) => { return formateData(data); }
    )
}

export default getWeatherDataSelector;
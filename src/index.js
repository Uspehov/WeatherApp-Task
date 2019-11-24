import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { HashRouter, Route } from 'react-router-dom'
import store from "./js/store";
import App from './App';
import ConnectedDetailsPage from './components/cityDetailsPage/detailsPage';
import { citiesArr } from './js/constants/citiesList'
import * as serviceWorker from './serviceWorker';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Route path='/' component={App} />
            {citiesArr.map(item => (<Route key={`index${item}`} path={`/${item}`} render={(props) => <ConnectedDetailsPage {...props} cityName={item} />} cityName={item} />))}
        </HashRouter >
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();

//Data Layer Control File (Redux)
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//Allows Dispatch to manually send the action to all the different reducers in the store, causing them to instantly recalculate the app state whenever we want.
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

//Development only
import axios from 'axios';
window.axios = axios;

//Creates a Redux store for storing state
const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

ReactDOM.render(
    <Provider store={store}><App/></Provider>,
    document.querySelector('#root')
);

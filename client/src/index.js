//Data Layer Control File (Redux)
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

//Creates a Redux store for storing state
const store = createStore(reducers, {}, applyMiddleware())

ReactDOM.render(
    <Provider store={store}><App/></Provider>,
    document.querySelector('#root')
);
import axios from 'axios';
import { FETCH_USER } from './types';

//Whenever action creator is called, it will return a function, redux-thunk will auto call it with the dispatch
export const fetchUser = () => async dispatch => {
    //GET request to the backend server API
    const res = await axios.get('/api/current_user')
    //When we have our response, we will dispatch
    dispatch({ type: FETCH_USER, payload: res.data })
};

//Making request to backend to send and retrieve how many credits a user has
export const handleToken = token => async dispatch => {
    //POST request to backend server to send user information
    const res = await axios.post('/api/stripe', token);
    //When we have our response, we will dispatch and update user
    dispatch({ type: FETCH_USER, payload: res.data })
};


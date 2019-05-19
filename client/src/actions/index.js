import axios from 'axios';
import { FETCH_USER } from './types';

const fetchUser = () => {
    //GET request to the backend server API
    axios.get('/api/current_user')
};
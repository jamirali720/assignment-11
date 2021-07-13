import Axios from 'axios';
import * as Types from './types';

export const register = user => dispatch => {
    Axios.post('/api/user/register', user)
    .then(res => {
        console.log(res)

    })
    .catch(error => {
        dispatch ({
            type: Types.USER_ERROR,
            payload: error.response.data
        })
    })

}
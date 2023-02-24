import { FETCH_USER_DATA, LOGIN_USER, LOGOUT_USER } from './types';
import axios from "axios";
import { Dispatch } from 'redux';

export const handleUserFetch = () => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await axios.get("https://randomuser.me/api/");
            const data = response.data.results[0];
            dispatch({type: FETCH_USER_DATA, payload: data})
        } catch (error) {
            console.log(error);
        }
    };
}

export const loginUser = (user: any) => (dispatch: Dispatch) => {
    // Logic to login user goes here
    dispatch({
        type: LOGIN_USER,
        payload: user,
    });
};

export const logoutUser = () => (dispatch: Dispatch) => {
    // Logic to logout user goes here
    dispatch({
        type: LOGOUT_USER,
    });
};

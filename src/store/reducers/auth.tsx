import { FETCH_USER_DATA, LOGIN_USER, LOGOUT_USER } from '../actions/types';
import { AnyAction } from 'redux';
interface AuthState {
  user: any;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  user: null,
  isLoggedIn: false,
};

export default function authReducer(state = initialState, action: AnyAction): AuthState {
  switch (action.type) {

    case FETCH_USER_DATA:
      return {
        ...state,
        user: action.payload,
      };
    case LOGIN_USER:
      return {
        ...state,
        isLoggedIn: true,
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}

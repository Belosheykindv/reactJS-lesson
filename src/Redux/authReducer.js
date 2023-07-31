import { stopSubmit } from "redux-form";
import { authAPI } from "../Api/apiRequest";
const SET_USER_DATA = 'SET_USER_DATA';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false,
    isFetching: false
}
const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA: {
            return { ...state, ...action.data }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        default: return state;
    }
}
export const setUserData = (email, id, login, isAuth) => ({ type: SET_USER_DATA, data: { email, id, login, isAuth } })
export const getUserData = () => async (dispatch) => {
    const data = await authAPI.auth();
    if (data.resultCode === 0) {
        let { email, id, login } = data.data;
        dispatch(setUserData(email, id, login, true));
    }
    ;
}
export const login = (email, password, rememberMe) => async (dispatch) => {
    const data = await authAPI.login(email, password, rememberMe)
    if (data.resultCode === 0) {
        dispatch(getUserData())
    } else {
        let message = data.messages[0];
        dispatch(dispatch(stopSubmit('login', { _error: message })));
    }
};

export const logout = () => async (dispatch) => {
    const data = await authAPI.logout()
    if (data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
    };
};

export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export default authReducer;


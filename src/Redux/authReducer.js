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
            return { ...state, ...action.data, isAuth: true }
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        default: return state;
    }
}
export const setUserData = (email, id, login) => ({ type: SET_USER_DATA, data: { email, id, login } })
export const getUserData = () => (dispatch) => {
    authAPI.auth().then(data => {
        if (data.resultCode === 0) {
            let { email, id, login } = data.data
            dispatch(setUserData(email, id, login))
        };
    });
}
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export default authReducer;


import { combineReducers, legacy_createStore as createStore } from "redux";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import profileReducer from "./profilePage-reducer";
import dialogsReducer from "./dialogPage-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk'
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
});
let store = createStore(reducers, composedEnhancer);
window.store = store;
export default store;
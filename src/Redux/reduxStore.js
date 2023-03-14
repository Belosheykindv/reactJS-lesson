import {combineReducers, legacy_createStore as createStore} from "redux"; 
import profileReducer from "./profilePage-reducer";
import dialogsReducer from "./dialogPage-reducer";
import usersReducer from "./users-reducer";
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
});
let store = createStore(reducers);
export default store;
import { createStore, combineReducers } from "redux";
import letters from "redux/modules/letters";
import member from "redux/modules/member";
import auth from "redux/modules/auth";
import { devToolsEnhancer } from "redux-devtools-extension";

const rootReducer = combineReducers({ letters, member, auth });

const store = createStore(rootReducer, devToolsEnhancer());

export default store;

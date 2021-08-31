import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import thunk from "redux-thunk"
import { userSigninReducers } from "./reducers/signinreducer";
import { getRolesReducers } from "./reducers/userManagementReducer";




const initialState={

    userSignin:{
        userInfo:sessionStorage.getItem("userInfo")
        ? JSON.parse(sessionStorage.getItem("userInfo"))
        :null,

        

    }

}

const reducer= combineReducers({

    userSignin:userSigninReducers,
    roleList:getRolesReducers,
    
   
    


})

const composeEnhancesr = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(reducer, initialState, composeEnhancesr(applyMiddleware(thunk)))
export default store;
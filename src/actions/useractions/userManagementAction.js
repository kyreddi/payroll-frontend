import Axios from "axios"
import { ADD_ROLE_FAIL, ADD_ROLE_REQUEST, ADD_ROLE_SUCCESS, CEO_REGISTRATION_FAIL, CEO_REGISTRATION_REQUEST, CEO_REGISTRATION_SUCCESS, GET_ROLE_FAIL, GET_ROLE_REQUEST, GET_ROLE_SUCCESS, INVITE_USER_FAIL, INVITE_USER_REQUEST, INVITE_USER_SUCCESS, USER_REGISTRATION_FAIL, USER_REGISTRATION_REQUEST, USER_REGISTRATION_SUCCESS } from "../../constants/UserManagementConstant"

export const getRoles = () => async (dispatch,getState) => {

    dispatch({
        type: USER_REGISTRATION_REQUEST
    })

    const { userSignin: { userInfo } } = getState()
    try {
        // http://payrollbackend-env.eba-kapsmdzq.ap-south-1.elasticbeanstalk.com/
        const { data } = await Axios.get("http://backendpostupdate-env.eba-3u73qfgk.ap-south-1.elasticbeanstalk.com/api/access/viewAllRoles",
            {
                headers: { Authorization: `Bearer ${userInfo.accessToken}` }
            })
        dispatch({
            type: USER_REGISTRATION_SUCCESS,
            payload: data
        })

       

    } catch (error) {

        dispatch({
            type: USER_REGISTRATION_FAIL,
            payload : 
            error.response && error.response.data.message ? error.response.data.message : error.message,
        })

    }

}

export const getAllResources = () => async(dispatch,getState) => {
    dispatch({

    })
    try{

        dispatch({

        })
    }catch(error){
        dispatch({
            
        })
    }
}


export const Roleslist = () => async (dispatch, getState) => {

    dispatch({
        type: GET_ROLE_REQUEST
    })
    const { userSignin: { userInfo } } = getState()
    try {
        const { data } = await Axios.get("http://backendpostupdate-env.eba-3u73qfgk.ap-south-1.elasticbeanstalk.com/api/access/getroleByRoleId/", {
            headers: { Authorization: `Bearer ${userInfo.accessToken}` }
        })
        dispatch({
            type: GET_ROLE_SUCCESS,
            payload: data
        })

    } catch (e) {
        dispatch({
            type: GET_ROLE_FAIL,
            payload: e.message
        })

    }

}

export const addRole=(roleName)=>async(dispatch,getState)=>{
    dispatch({
        type: ADD_ROLE_REQUEST
    })

    const { userSignin: { userInfo } } = getState()
    const from = userInfo.username

    
    try {
        const { data } = await Axios.post("http://backendpostupdate-env.eba-3u73qfgk.ap-south-1.elasticbeanstalk.com/api/access/addRole",{roleName}, {
            headers: { Authorization: `Bearer ${userInfo.accessToken}` }
        })
        dispatch({
            type: ADD_ROLE_SUCCESS,
            payload: data
        })


    } catch (e) {
        dispatch({
            type: ADD_ROLE_FAIL,
            payload: e.message
        })
    }


}


export const registerByCeo = (name, emailId, gender,mobile,role) => async (dispatch, getState) => {

    dispatch({
        type: CEO_REGISTRATION_REQUEST
    })
    const { userSignin: { userInfo } } = getState()
    try {

        const { data } = await Axios.post("http://backendpostupdate-env.eba-3u73qfgk.ap-south-1.elasticbeanstalk.com/api/auth/signup", { name, emailId, gender, mobile,role },
            {
                headers: { Authorization: `Bearer ${userInfo.accessToken}` }
            })
        console.log(userInfo.accessToken)
        dispatch({
            type: CEO_REGISTRATION_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: CEO_REGISTRATION_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message : error.message
        })



    }
}


export const invite = (email) => async (dispatch, getState) => {
    dispatch({
        type: INVITE_USER_REQUEST
    })
    const { userSignin: { userInfo } } = getState()
    const from = userInfo.username
    try {
        const { data } = await Axios.post("http://backendpostupdate-env.eba-3u73qfgk.ap-south-1.elasticbeanstalk.com/api/access/hr/email", { from, email }, {
            headers: { Authorization: `Bearer ${userInfo.accessToken}` }
        })
        dispatch({
            type: INVITE_USER_SUCCESS,
            payload: data
        })


    } catch (e) {
        dispatch({
            type: INVITE_USER_FAIL,
            payload: e.message
        })
    }
}
import Axios from "axios";
import {USER_SIGNIN_FAIL,USER_SIGNIN_SUCCESS, USER_SIGNOUT, USER_SIGNIN_REQUEST } from "../../constants/userconstants";


export const userSignin = (username, password) => async (dispatch) => {

    dispatch({
        type: USER_SIGNIN_REQUEST
    })

    try {
        // http://payrollbackend-env.eba-kapsmdzq.ap-south-1.elasticbeanstalk.com/
        const { data } = await Axios.post("http://backendpostupdate-env.eba-3u73qfgk.ap-south-1.elasticbeanstalk.com/api/auth/signin", { username, password })
      //  console.log(username)
        //console.log(password)
        dispatch({
            type: USER_SIGNIN_SUCCESS,
            payload: data
        })
        console.log(data)
        sessionStorage.setItem("userInfo",JSON.stringify(data))

    } catch (error) {

        dispatch({
            type: USER_SIGNIN_FAIL,
            payload : 
            error.response && error.response.data.message ? error.response.data.message : error.message,
        })

    }

}

export const signout=()=>(dispatch)=>{
    sessionStorage.clear()
    dispatch({
        type : USER_SIGNOUT
    })


}
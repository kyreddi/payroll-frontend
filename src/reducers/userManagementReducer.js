import { USER_REGISTRATION_FAIL, USER_REGISTRATION_REQUEST, USER_REGISTRATION_SUCCESS } from "../constants/UserManagementConstant"


export const getRolesReducers = (state = {}, action) => {
    switch(action.type){

        case USER_REGISTRATION_REQUEST:
            return{
                loading : true
            }
        case USER_REGISTRATION_SUCCESS:
            return{
                loading : false,
                roles : action.payload
            }
        case USER_REGISTRATION_FAIL:
            return{
                loading : false,
                error : action.payload
            }
        default : return state

    }
}
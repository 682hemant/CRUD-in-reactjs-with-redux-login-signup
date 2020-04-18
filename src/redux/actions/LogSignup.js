import * as actionTypes from './actionTypes';

export const signup = (user) => {
    return{
        type: actionTypes.SIGNUP,
        payload: user
    }
}

export const login=(user)=>{
    return{
        type:actionTypes.LOGIN,
        payload:user
    }
}
// export const storeresult=(title)=>{
//     return{
//         type:actionTypes.STORE_ARTICLE,
//         payload:title
//     }
// }


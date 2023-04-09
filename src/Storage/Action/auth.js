import axios from "axios"
import {API_URL} from "@env"

export const login = (data) => async (dispatch,getState) => {
    try{
        dispatch({type:"LOGIN_REQUEST"})
        const result = await axios.post(API_URL+"/auth/login",data)
        console.log(result)
        result.data.data && dispatch({type:"LOGIN_SUCCESS",payload:result.data})
    } catch(err){
        console.log(err)
        dispatch({type:"LOGIN_ERROR"})
    }
}

export const logout = () => {
    return(dispatch,getState) => {
        dispatch({type:"DELETE_STORE_TOKEN"})
    }
} 
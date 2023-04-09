import axios from "axios"
import {API_URL} from "@env"

export const getMyRecipe = (token) => async (dispatch,getState) => {
    try{
        dispatch({type:"MY_RECIPE_REQUEST"})
        let headers = {
            headers:{
              "Authorization": `Bearer ${token}`
        }}
        const result = await axios.get(API_URL+"/recipe/myRecipe",headers)
        console.log(result)
        result.data.data && dispatch({type:"MY_RECIPE_SUCCESS",payload:result.data.data})
    } catch(err){
        console.log(err)
        dispatch({type:"MY_RECIPE_ERROR"})
    }
}
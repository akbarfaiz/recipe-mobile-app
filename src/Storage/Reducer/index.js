import { combineReducers } from "redux";
import auth from "./auth";
import myRecipe from "./myRecipe";

const appReducers = combineReducers({
    auth, myRecipe
})

export default appReducers
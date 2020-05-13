import { combineReducers } from "redux";
import homepageReducer from "../pages/HomePage/logic/reducer";

const rootReducer = combineReducers({
  homepage: homepageReducer
})

export default rootReducer
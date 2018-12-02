import { combineReducers } from "redux";
import domReducer from "./domReducer";

export default combineReducers({
  DOM: domReducer
});

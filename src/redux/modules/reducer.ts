import { create } from "domain";
import { combineReducers } from "redux";
import auth from "./auth";

const reducer = combineReducers({
  auth,
});

export default reducer;

import { connectRouter } from "connected-react-router";
import { create } from "domain";
import { connect } from "http2";
import { combineReducers } from "redux";
import auth from "./auth";
import { History } from "history";

const reducer = (history: History<unknown>) =>
  combineReducers({
    auth,
    router: connectRouter(history),
  });

export default reducer;

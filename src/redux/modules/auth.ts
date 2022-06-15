import { Suspense } from "react";
import { Action, createActions, handleActions } from "redux-actions";
import { call, put, takeEvery } from "redux-saga/effects";
import TokenService from "../../services/TokenService";
import userService from "../../services/UserService";
import { LoginReqType } from "../../types";

interface AuthState {
  token: string | null;
  loading: boolean;
  error: Error | null;
}

const initialState: AuthState = {
  token: null,
  loading: false,
  error: null,
};

const prefix = "grbooks/auth";

export const { pending, success, fail } = createActions(
  "PENDING",
  "SUCCESS",
  "FAIL",
  { prefix }
);

const reducer = handleActions<AuthState, string>(
  {
    PENDING: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
    SUCCESS: (state, action) => ({
      token: action.payload,
      loading: false,
      error: null,
    }),
    FAIL: (state, action: any) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  },
  initialState,
  { prefix }
);

export default reducer;

// saga
export const { login, logout } = createActions("LOGIN", "LOGOUT", { prefix });

function* loginSaga(action: Action<LoginReqType>) {
  try {
    yield put(pending());
    const token: string = yield call(userService.login, action.payload);
    // localstorage
    TokenService.set(token);
    yield put(success(token));
    // push
    yield put(push("/"));
  } catch (error: any) {
    yield put(fail(new Error(error?.response?.date?.error || "UNKNOWN_ERROR")));
  }
}

function* logoutSaga() {}

export function* authSaga() {
  yield takeEvery(`${prefix}/LOGIN`, loginSaga);
  yield takeEvery(`${prefix}/LOGOUT`, logoutSaga);
}

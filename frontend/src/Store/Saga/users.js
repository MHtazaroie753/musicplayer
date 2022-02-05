import { takeEvery, put, all, takeLatest, call } from "redux-saga/effects";
import userActions from "../Actions/userActions";
import HttpService from "../../Services/HttpService";

const httpService = new HttpService();
const userRegisterWorker = function* (action) {
  try {
    const result = yield call(() => {
      return httpService.post("auth/register", action.payload);
    });
    // console.log(result.data);
    yield put({
      type: userActions.USER_REGISTER_SUCCESS,
      payload: result.data,
    });
  } catch (error) {
    yield put({
      type: userActions.USER_REGISTER_FAILED,
      payload: error,
    });
  }
};
export const userRegisterWatcher = function* () {
  yield takeLatest(userActions.USER_REGISTER, userRegisterWorker);
};

const userLoginWorker = function* (action) {
  try {
    const result = yield call(() => {
      return httpService.post("auth/login", action.payload);
    });

    yield call(() => {
      localStorage.setItem("token", result.data.token);
    });
    yield put({
      type: userActions.USER_LOGIN_SUCCESS,
      payload: {
        isUserLoggedIn: true,
        user_status: result.data.user_status,
        full_name: result.data.full_name,
      },
    });
  } catch (error) {
    yield put({
      type: userActions.USER_LOGIN_FAILED,
      payload: error.response.data,
    });
  }
};
export const userLoginWatcher = function* () {
  yield takeLatest(userActions.USER_LOGIN, userLoginWorker);
};

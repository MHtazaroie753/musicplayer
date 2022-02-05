import { takeEvery, takeLatest, put, call, all } from "redux-saga/effects";
import * as userHandler from "./users";
import * as mainHandler from "./main";
import * as dashboardHandler from "./song";
export default function* root() {
  yield all([
    userHandler.userRegisterWatcher(),
    userHandler.userLoginWatcher(),
    mainHandler.initWatcher(),

    dashboardHandler.createSongWatcher(),
  ]);
}

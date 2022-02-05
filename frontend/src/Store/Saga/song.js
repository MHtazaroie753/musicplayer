import { takeEvery, put, all, takeLatest, call } from "redux-saga/effects";
import songActions from "../Actions/songActions";
import HttpService from "../../Services/HttpService";

const httpService = new HttpService();

const createSongWorker = function* (action) {
  try {
    const result = yield call(() => {
      return httpService.post("dashboard/songs", action.payload);
    });
    yield put({
      type: songActions.CREATE_SONG_SUCCESS,
      payload: result.data,
    });
  } catch (error) {
    yield put({
      type: songActions.CREATE_SONG_FAILED,
      payload: error,
    });
  }
};
export const createSongWatcher = function* () {
  yield takeLatest(songActions.CREATE_SONG, createSongWorker);
};

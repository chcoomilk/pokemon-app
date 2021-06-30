import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchItemFailure, fetchItemSuccess } from "./actions";
import { FETCH_ITEM_REQUEST } from "./actionType";
import { Item } from "./types";

const getItems = () =>
  axios.get<Item[]>("https://pokeapi.co/api/v2/item");

/*
  Worker Saga: Fired on FETCH_ITEM_REQUEST action
*/
function* fetchItemSaga() {
  try {
    const response = yield call(getItems);
    yield put(
      fetchItemSuccess({
        items: response.data.results,
      })
    );
  } catch (e) {
    yield put(
      fetchItemFailure({
        error: e.message,
      })
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_ITEM_REQUEST` action.
  Allows concurrent increments.
*/
function* itemSaga() {
  yield all([takeLatest(FETCH_ITEM_REQUEST, fetchItemSaga)]);
}

export default itemSaga;
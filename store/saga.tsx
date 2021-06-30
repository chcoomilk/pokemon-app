import { all, fork } from "redux-saga/effects";
import itemSaga from "./item/sagas";

import pokemonSaga from "./pokemon/sagas";

export function* rootSaga() {
  yield all([fork(pokemonSaga), fork(itemSaga)]);
}
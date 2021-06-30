import axios from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchPokemonFailure, fetchPokemonSuccess } from "./actions";
import { FETCH_POKEMON_REQUEST } from "./actionTypes";
import { Pokemon } from "./types";

const getPokemons = () =>
  axios.get<Pokemon[]>("https://pokeapi.co/api/v2/pokemon");

/*
  Worker Saga: Fired on FETCH_POKEMON_REQUEST action
*/
function* fetchPokemonSaga() {
  try {
    const response = yield call(getPokemons);
    yield put(
      fetchPokemonSuccess({
        pokemons: response.data.results,
      })
    );
  } catch (e) {
    yield put(
      fetchPokemonFailure({
        error: e.message,
      })
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_POKEMON_REQUEST` action.
  Allows concurrent increments.
*/
function* pokemonSaga() {
  yield all([takeLatest(FETCH_POKEMON_REQUEST, fetchPokemonSaga)]);
}

export default pokemonSaga;
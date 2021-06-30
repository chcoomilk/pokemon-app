import {
  FETCH_POKEMON_REQUEST,
  FETCH_POKEMON_FAILURE,
  FETCH_POKEMON_SUCCESS,
} from "./actionTypes";
import {
  FetchPokemonRequest,
  FetchPokemonSuccess,
  FetchPokemonSuccessPayload,
  FetchPokemonFailure,
  FetchPokemonFailurePayload,
} from "./types";

export const fetchPokemonRequest = (): FetchPokemonRequest => ({
  type: FETCH_POKEMON_REQUEST,
});

export const fetchPokemonSuccess = (
  payload: FetchPokemonSuccessPayload
): FetchPokemonSuccess => ({
  type: FETCH_POKEMON_SUCCESS,
  payload,
});

export const fetchPokemonFailure = (
  payload: FetchPokemonFailurePayload
): FetchPokemonFailure => ({
  type: FETCH_POKEMON_FAILURE,
  payload,
});

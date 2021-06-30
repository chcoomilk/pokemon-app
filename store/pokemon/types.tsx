import {
  FETCH_POKEMON_REQUEST,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_FAILURE
} from "./actionTypes";

export interface Pokemon {
  name: string,
  url: string
}

export interface PokemonState {
  pending: boolean;
  pokemons: Pokemon[];
  error : string | null;
}

export interface FetchPokemonSuccessPayload {
  pokemons: Pokemon[];
}

export interface FetchPokemonFailurePayload {
  error: string;
}

export interface FetchPokemonRequest {
  type: typeof FETCH_POKEMON_REQUEST;
}

export type FetchPokemonSuccess = {
  type: typeof FETCH_POKEMON_SUCCESS;
  payload: FetchPokemonSuccessPayload;
};

export type FetchPokemonFailure = {
  type: typeof FETCH_POKEMON_FAILURE;
  payload: FetchPokemonFailurePayload;
};

export type PokemonActions =
  | FetchPokemonRequest
  | FetchPokemonSuccess
  | FetchPokemonFailure;

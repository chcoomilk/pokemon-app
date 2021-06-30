import {
  FETCH_POKEMON_REQUEST,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_FAILURE
} from "./actionTypes";

import { PokemonActions, PokemonState } from "./types";

const initial_state: PokemonState = {
  pending: false,
  pokemons: [],
  error: null
};

export default (state = initial_state, action: PokemonActions) => {
  switch (action.type) {
    case FETCH_POKEMON_REQUEST:
      return {
        ...state,
        pending: true
      };

    case FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        pending: false,
        pokemons: action.payload.pokemons,
        error: null
      };

    case FETCH_POKEMON_FAILURE:
      return {
        ...state,
        pending: false,
        pokemons: [],
        error: action.payload.error
      }

    default:
      return {
        ...state
      };
  }
}

import { createSelector } from "reselect";

import { AppState } from "../reducer";

const getPending = (state: AppState) => state.pokemon.pending;

const getPokemons = (state: AppState) => state.pokemon.pokemons;

const getError = (state: AppState) => state.pokemon.error;

export const getPokemonsSelector = createSelector(getPokemons, (todos) => todos);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);
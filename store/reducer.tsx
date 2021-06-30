import { combineReducers } from "redux";
import pokemon_reducer from "./pokemon/reducer";
import item_reducer from "./item/reducer";

const reducer = combineReducers({
  pokemon: pokemon_reducer,
  item: item_reducer
});

export type AppState = ReturnType<typeof reducer>;

export default reducer;

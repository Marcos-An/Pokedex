import { createStore } from "redux";

const INITIAL_STATE = {
  pokemonDetail: [],
  pokemon: [],
  next: "",
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "POKEMON_DETAIL":
      return { ...state, pokemonDetail: action.value };
    case "POKEMON":
      return { ...state, pokemon: action.value };
    case "NEXT":
      return { ...state, next: action.value };
    default:
      break;
  }
  return state;
}

const store = createStore(reducer);

export default store;

import {
  POKEMON_FAIL,
  POKEMON_LOADING,
  POKEMON_SUCCESS,
  PokemonDispatchTypes,
  PokemonType,
} from "./../actions/PokemonActionTypes";
interface DefaultStateI {
  loading: boolean;
  pokemon?: PokemonType;
}
const defaultState: DefaultStateI = {
  loading: false,
};
const pokemonReducer = (
  state: DefaultStateI = defaultState,
  action: PokemonDispatchTypes
): DefaultStateI => {
  switch (action.type) {
    case POKEMON_FAIL:
      return { ...state, loading: false };
    case POKEMON_LOADING:
      return { ...state, loading: true };
    case POKEMON_SUCCESS:
      return { ...state, loading: false, pokemon: action.payload };
    default:
      return state;
  }
};

export default pokemonReducer;

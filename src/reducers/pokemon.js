import * as types from '../actions/actionTypes';


const initState = [];


const pokemonReducer = (state = initState, action) => {
  switch (action.type) {
    case types.POKEMON_GET_SUCCEEDED: {
      const { pokemon } = action.payload;
      return state.some(p => p.name === pokemon.name)
        ? state
        : [...state, pokemon];
    }
    default:
      return state;
  }
};


export default pokemonReducer;

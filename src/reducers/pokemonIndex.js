import * as types from '../actions/actionTypes';


const initState = [];


const pokemonIndexReducer = (state = initState, action) => {
  switch (action.type) {
    case types.POKEMON_INDEX_SUCCEEDED: {
      const { pokemon } = action.payload;
      return pokemon;
    }
    default:
      return state;
  }
};


export default pokemonIndexReducer;

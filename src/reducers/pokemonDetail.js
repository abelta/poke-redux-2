import * as types from '../actions/actionTypes';


const initState = {
  id: false,
};


const pokemonDetailReducer = (state = initState, action) => {
  switch (action.type) {
    case types.POKEMON_SELECTED: {
      const { id } = action.payload;
      return { id };
    }
    default:
      return state;
  }
};


export default pokemonDetailReducer;

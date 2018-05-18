import * as types from './actionTypes';


const pokemonGetRequested = ({ id }) => ({
  type: types.POKEMON_GET_REQUESTED,
  payload: { id },
});


export default pokemonGetRequested;

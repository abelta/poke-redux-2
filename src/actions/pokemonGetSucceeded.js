import * as types from './actionTypes';


const pokemonGetSucceeded = ({ pokemon }) => ({
  type: types.POKEMON_GET_SUCCEEDED,
  payload: { pokemon },
});


export default pokemonGetSucceeded;

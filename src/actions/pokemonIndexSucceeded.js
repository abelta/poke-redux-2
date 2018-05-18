import * as types from './actionTypes';


const pokemonIndexSucceeded = ({ pokemon }) => ({
  type: types.POKEMON_INDEX_SUCCEEDED,
  payload: { pokemon },
});


export default pokemonIndexSucceeded;

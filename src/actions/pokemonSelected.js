import * as types from './actionTypes';


const pokemonSelected = ({ id }) => ({
  type: types.POKEMON_SELECTED,
  payload: { id },
});


export default pokemonSelected;

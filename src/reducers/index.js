import { combineReducers } from 'redux';
import pokemon from './pokemon';
import pokemonDetail from './pokemonDetail';
import pokemonIndex from './pokemonIndex';
import pokemonIndexCall from './pokemonIndexCall';

const reducer = combineReducers({
  pokemon,
  pokemonDetail,
  pokemonIndex,
  pokemonIndexCall,
});

export default reducer;

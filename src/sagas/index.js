import { spawn } from 'redux-saga/effects';
import pokemonGet from './pokemonGet';
import pokemonIndex from './pokemonIndex';

const saga = function* saga() {
  yield spawn(pokemonGet);
  yield spawn(pokemonIndex);
};

export default saga;

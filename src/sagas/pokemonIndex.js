import { call, put, spawn, takeLatest } from 'redux-saga/effects';
import { pokemonIndexFailed, pokemonIndexSucceeded } from '../actions';
import * as types from '../actions/actionTypes';


const pokemonIndexRequestedApiCall = () => (
  fetch('https://pokeapi.co/api/v2/pokemon?limit=60/')
    .then(response => response.json())
    .then(response => response.results)
);

const pokemonIndexRequested = function* pokemonIndexRequested() {
  try {
    const pokemon = yield call(pokemonIndexRequestedApiCall);
    yield put(pokemonIndexSucceeded({ pokemon }));
  } catch (e) {
    yield put(pokemonIndexFailed());
  }
};

const pokemonIndexRequestedSaga = function* pokemonIndexRequestedSaga() {
  yield takeLatest(types.POKEMON_INDEX_REQUESTED, pokemonIndexRequested);
};

const pokemonIndexSaga = function* pokemonIndexSaga() {
  yield spawn(pokemonIndexRequestedSaga);
};


export default pokemonIndexSaga;

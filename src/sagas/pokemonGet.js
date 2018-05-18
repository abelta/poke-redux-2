import { call, put, spawn, takeLatest } from 'redux-saga/effects';
import * as types from '../actions/actionTypes';
import { pokemonGetFailed, pokemonGetSucceeded } from '../actions';


const pokemonGetRequestedApiCall = id => (
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(response => response.json())
);

const pokemonGetRequested = function* pokemonGetRequested(action) {
  const { id } = action.payload;
  try {
    const pokemon = yield call(pokemonGetRequestedApiCall, id);
    yield put(pokemonGetSucceeded({ pokemon }));
  } catch (e) {
    yield put(pokemonGetFailed());
  }
};

const pokemonGetRequestedSaga = function* pokemonGetRequestedSaga() {
  yield takeLatest(types.POKEMON_GET_REQUESTED, pokemonGetRequested);
};

const pokemonGetSaga = function* pokemonGetSaga() {
  yield spawn(pokemonGetRequestedSaga);
};


export default pokemonGetSaga;

import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { PokemonDetail, PokemonList } from './containers';
import reducer from './reducers';
import saga from './sagas';
import './App.css';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({ realtime: true });
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(saga);

const mockPokemon = {
  name: 'Bulbasaur',
};


const App = () => (
  <Provider store={store}>
    <div className="app">
      <PokemonList />
      <PokemonDetail pokemon={mockPokemon} />
    </div>
  </Provider>
);

export default App;

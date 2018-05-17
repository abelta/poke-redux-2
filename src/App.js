import React from 'react';
import { PokemonDetail, PokemonList } from './components';
import './App.css';

const mockPokemonList = [
  { name: 'Bulbasaur', url: 'bulbasaur.com' },
  { name: 'Charmander', url: 'charmander.com' },
  { name: 'Squirtle', url: 'squirtle.com' },
];

const mockPokemon = {
  name: 'Bulbasaur',
};


const App = () => (
  <div className="app">
    <PokemonList pokemon={mockPokemonList} />
    <PokemonDetail pokemon={mockPokemon} />
  </div>
);

export default App;

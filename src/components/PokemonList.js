import React from 'react';
import PropTypes from 'prop-types';
import PokemonListItem from './PokemonListItem';
import './PokemonList.css';

const PokemonList = ({ pokemon }) => (
  <section className="pokemon-list">
    <h2>Pokemon List</h2>
    <ul className="pokemon-list__list">
      {
        pokemon.map(p => (
          <li key={p.name}>
            <PokemonListItem url={p.url}>
              {p.name}
            </PokemonListItem>
          </li>))
      }
    </ul>
  </section>
);

PokemonList.propTypes = {
  pokemon: PropTypes.array.isRequired,
};


export default PokemonList;

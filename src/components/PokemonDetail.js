import React from 'react';
import PropTypes from 'prop-types';
import './PokemonDetail.css';


const PokemonDetail = ({ pokemon }) => (
  <section className="pokemon-detail">
    <h2>Pokemon Detail</h2>
    <h3>{pokemon.name}</h3>
  </section>
);


PokemonDetail.defaultProps = {
  pokemon: null,
};

PokemonDetail.propTypes = {
  pokemon: PropTypes.object,
};


export default PokemonDetail;

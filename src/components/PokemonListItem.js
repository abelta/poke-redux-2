import React from 'react';
import PropTypes from 'prop-types';
import './PokemonListItem.css';


const PokemonListItem = ({ children, onClick }) => (
  <button className="pokemon-list-item" onClick={onClick}>
    {children}
  </button>
);


PokemonListItem.defaultProps = {
  onClick: () => {},
};


PokemonListItem.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};


export default PokemonListItem;

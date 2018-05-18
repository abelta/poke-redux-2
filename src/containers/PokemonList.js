import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { pokemonIndexRequested, pokemonSelected } from '../actions';
import { PokemonListItem } from '../components';
import './PokemonList.css';


class PokemonList extends Component {
  componentDidMount() {
    const { requestPokemonIndex } = this.props;
    requestPokemonIndex();
  }

  render() {
    const { loading, pokemon, selectPokemon } = this.props;
    return (
      <section className="pokemon-list">
        <h2>Pokemon List</h2>
        {loading && <p className="loading-message">LOADING...</p>}
        <ul className="pokemon-list__list">
          {
            pokemon.map(p => (
              <li key={p.name}>
                <PokemonListItem onClick={() => selectPokemon(p.name)}>
                  {p.name}
                </PokemonListItem>
              </li>))
          }
        </ul>
      </section>
    );
  }
}


PokemonList.propTypes = {
  loading: PropTypes.bool.isRequired,
  pokemon: PropTypes.array.isRequired,
  requestPokemonIndex: PropTypes.func.isRequired,
  selectPokemon: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loading: state.pokemonIndexCall.loading,
  pokemon: state.pokemonIndex,
});

const mapDispatchToProps = dispatch => ({
  requestPokemonIndex: () => dispatch(pokemonIndexRequested()),
  selectPokemon: id => dispatch(pokemonSelected({ id })),
});


export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { pokemonGetRequested } from '../actions';
import './PokemonDetail.css';


class PokemonDetail extends Component {
  shouldComponentUpdate(nextProps) {
    const { id, getPokemon, pokemon } = nextProps;
    if (id && !pokemon) { getPokemon(id); }
    return true;
  }

  render() {
    const { pokemon } = this.props;
    return (
      <section className="pokemon-detail">
        <h2>Pokemon Detail</h2>
        {
          pokemon &&
          <article>
            <h3>#{pokemon.id}&nbsp;{pokemon.name}</h3>
            <p>{pokemon.types.map(t => t.type.name).join('/')}</p>
            <h4>Moves</h4>
            <ul>
              {pokemon.moves.map(m => <li key={m.move.name}>{m.move.name}</li>)}
            </ul>
          </article>
        }
      </section>
    );
  }
}


PokemonDetail.defaultProps = {
  pokemon: null,
};

PokemonDetail.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  getPokemon: PropTypes.func.isRequired,
  pokemon: PropTypes.object,
};

const mapStateToProps = state => ({
  id: state.pokemonDetail.id,
  pokemon: state.pokemonDetail.id
    ? state.pokemon.find(p => p.name === state.pokemonDetail.id)
    : null,
});

const mapDispatchToProps = dispatch => ({
  getPokemon: id => dispatch(pokemonGetRequested({ id })),
});


export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);

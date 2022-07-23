import React from 'react';
import {
  arrayOf,
} from 'prop-types';

import Pokemon from './Pokemon';
import { pokemonType } from './types';
import './App.css';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    const { pokemons } = props;

    this.state = {
      atual: 0,
      objeto: pokemons,
      objetoP: pokemons,
    };
  }

  mudaPokemon = () => this.setState((state) => ({ atual: state.atual + 1 }));

  zeraPokemon = () => this.setState({ atual: 0 });

  selecao = ({ target }) => {
    const { objetoP } = this.state;
    this.setState({
      atual: 0,
      objeto: objetoP.filter((e) => e.type.includes(target.innerHTML)),
    });
  }

  todos = () => this.setState((state) => ({ objeto: state.objetoP }));

  render() {
    const { atual, objeto } = this.state;
    return (
      <section>
        <div className="pokedex">
          <Pokemon pokemon={ objeto[atual] } />
        </div>
        <div>
          <button className="btn-selecao" type="button" onClick={ this.todos }>
            All
          </button>
          <button className="btn-selecao" type="button" onClick={ this.selecao }>
            Fire
          </button>
          <button className="btn-selecao" type="button" onClick={ this.selecao }>
            Psychic
          </button>
        </div>
        <br />
        <button
          className="btn-proximo"
          type="button"
          onClick={ (objeto.length - 1) > atual ? this.mudaPokemon : this.zeraPokemon }
        >
          Proximo
        </button>
      </section>
    );
  }
}

Pokedex.propTypes = {
  pokemons: arrayOf(pokemonType).isRequired,
};

export default Pokedex;

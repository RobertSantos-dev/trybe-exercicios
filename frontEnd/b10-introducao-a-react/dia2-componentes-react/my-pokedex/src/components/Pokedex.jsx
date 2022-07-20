import React from 'react';
import Pokemon from './Pokemon';

import pokemons from '../data';

class Pokedex extends React.Component {
    render() {
        return(
            <main>
                <header><h1>Pokedex</h1></header>
                <section>
                    <ul>
                        <Pokemon pokemons={pokemons}/>
                    </ul>
                </section>
            </main>
        )
    }
}
export default Pokedex;

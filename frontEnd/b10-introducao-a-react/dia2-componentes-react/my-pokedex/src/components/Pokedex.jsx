import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    render() {
        return(
            <main>
                <header><h1>Pokedex</h1></header>
                <section>
                    <ul>
                        <Pokemon />
                    </ul>
                </section>
            </main>
        )
    }
}
export default Pokedex;

import React from 'react';
import pokemons from '../data';

export default class Pokemon extends React.Component {
    render() {
        return(
            <>
            {pokemons.map((e, i) => {
            const { name, type, averageWeight, image } = e;
                return (
                    <li key={i}>
                    <div>
                        <p>{name}</p>
                        <p>{type}</p>
                        <p>
                            Average Weight: {averageWeight.value}{averageWeight.measurementUnit}
                        </p>
                    </div>
                    <div>
                        <img src={image} alt="Aqui deveria estar um pokemon" />
                    </div>
                    </li>
                )})
            }
            </>
        )
    }
}

import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
    render() {
        const { pokemons } = this.props;
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
Pokemon.propTypes = {
    pokemons: PropTypes.arrayOf( PropTypes.shape({
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        averageWeight: PropTypes.shape({
            value: PropTypes.number.isRequired,
            measurementUnit: PropTypes.string.isRequired
        }),
        image: PropTypes.string.isRequired,
    }))
}
export default Pokemon;
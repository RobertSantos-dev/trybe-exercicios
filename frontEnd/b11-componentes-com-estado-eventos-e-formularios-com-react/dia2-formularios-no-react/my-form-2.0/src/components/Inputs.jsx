import React from "react";
import PropTypes from 'prop-types';

class Inputs extends React.Component {
    render() {
        const { tipo, texto, name, max, change, valor, blur } = this.props;
        return (
            <div>
                <label htmlFor={ name }>{ texto }: </label>
                <input 
                    type={ tipo }
                    id={ name }
                    name={ name }
                    maxLength={ max }
                    required
                    value={ valor }
                    onChange={ change }
                    onBlur={ blur }
                />
            </div>
        )
    }
}

Inputs.propTypes = {
    tipo: PropTypes.string,
    name: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
    max: PropTypes.string,
    blur: PropTypes.func,
    change: PropTypes.func,
    value: PropTypes.string.isRequired,
}

export default Inputs;
import React from "react";

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


export default Inputs;
import React from "react";

class TextArea extends React.Component {
    render() {
        const { name, max, texto, mouseEnter } = this.props;
        return (
            <div>
                <label htmlFor={ name }>{ texto }: </label>
                <textarea 
                    name={ name }
                    id={ name }
                    cols="30"
                    rows="10"
                    maxLength={max}
                    required
                    onMouseEnter={ mouseEnter }
                    >
                    </textarea>
            </div>
        )
    }
}

export default TextArea;

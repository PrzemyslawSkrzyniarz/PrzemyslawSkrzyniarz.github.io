import React, { Component } from 'react';

class Button extends Component {

    render() {
        // console.log(this);
        return (
            <button onClick={() => this.props.counterUp()}>Dodaj</button>
            // funkcja zwrotna do rodzica która wywołuje metodę counterUp()
            // () => this.props.counterUp()
        );
    }
}

export default Button;
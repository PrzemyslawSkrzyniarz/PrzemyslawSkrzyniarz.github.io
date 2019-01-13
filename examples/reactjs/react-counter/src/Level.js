import React, { Component } from 'react';

class Level extends Component {

    render() {
        return (
            <div className="level">Aktualny level to: {this.props.levelValue}</div>
        );
    }
}

export default Level;
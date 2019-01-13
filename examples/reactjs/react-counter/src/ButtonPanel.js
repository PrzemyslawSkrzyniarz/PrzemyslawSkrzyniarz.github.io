import React, { Component } from 'react';

class ButtonPanel extends Component {

    render() {
        // console.log(this.props.changeCounterValue);
        // wylogowałem tresc metody
        return (
            <div className="ButtonPanel">
                <button onClick={()=>this.props.changeCounterValue()}>Dodaj jeden</button>
                <button onClick={() => this.props.resetCounterValue(false)}>Wartość początkowa</button>
                <button onClick={()=>this.props.resetCounterValue(true)}>Reset</button>
            </div>
            // z poziomu dziecka wywołujemy metodę rodzica 
            // <button onClick={()=>this.props.changeCounterValue()}>Dodaj jeden</button>
        );
    }
}

export default ButtonPanel;
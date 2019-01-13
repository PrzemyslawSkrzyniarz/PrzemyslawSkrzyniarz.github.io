import React, { Component } from 'react';

import CounterValue from './CounterValue';
import Button from './Button';

class Counter extends Component {

    constructor(){
        super();
        this.state = {
            counterValue: 1
        }
    }

    changeCounterValue = () => {
        // console.log('dodaj');
        this.setState((prevState)=>{
            return({counterValue: prevState.counterValue + 1})
        });
    }

    render() {
        return (
            <div className="counter">
                <CounterValue value={this.state.counterValue} />
                <Button counterUp={this.changeCounterValue}/>
            </div>
        );
    }
}

export default Counter;
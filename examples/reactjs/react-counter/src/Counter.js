import React, { Component } from 'react';

import ButtonPanel from './ButtonPanel';
import Level from './Level';

class Counter extends Component {

    constructor(props){
        super(props);
        this.state = {
            counterValue: this.props.initValue,
            level: 1
        }
    }

    levelUp = () => {
        this.setState((prevState) => {
            return ({ level: prevState.level + 1 })
        }); 
    }

    changeValue = () => {
        // console.log('Zmień wartosć');
        this.setState((prevState)=>{
            return ({ counterValue: this.state.counterValue + 1 })
        });
        if ((this.state.counterValue+1)%10 == 0)
        this.levelUp();
    }

    reset = (setZero) => {
        // console.log(setZero);
        if(setZero){
            this.setState({ counterValue: 0, level: 1 });
        } else {
            this.setState({ counterValue: this.props.initValue });
        }
    }
// https://reactjs.org/docs/state-and-lifecycle.html >> Adding Lifecycle Methods to a Class
    componentDidMount() {
        let currentLevel = parseInt(this.state.counterValue / 10) + 1;
        this.setState({level: currentLevel});
    }

    render() {
        return (
            <div className="Counter">
            Licznik: <span>{this.state.counterValue}  </span> <br/>
            <Level levelValue={this.state.level} />
            <ButtonPanel changeCounterValue={this.changeValue} resetCounterValue={this.reset}/>
            </div>
        );
    }
}

export default Counter;
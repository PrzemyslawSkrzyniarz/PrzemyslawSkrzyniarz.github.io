import React, { Component } from 'react';
import ButtonPanel from './ButtonPanel';

class Counter extends Component {

    // używamy konstruktora by ustawić pierwotny stan elementu - musimy przekazać props
    constructor(props){
        // dzięki temu możemy rozszerzać funkcjonasć klasy - musimy przekazać props
        super(props);

        // tworzymy obiekt który jest własciwoscią klasy Counter
        this.state = {
            counterValue: this.props.initValue
        }
    }

    changeValue = () => {
        console.log('Zmień wartosć');
        // metoda do zarządzania stanem to setState() - może przyjać funkcję zwrotną lub obiekt
        // this.setState({ counterValue: this.state.counterValue + 1});
        // lub tak - to choć dłuższe jest lepsze (według standardu)
        this.setState((prevState)=>{
            return ({ counterValue: this.state.counterValue + 1 })
        });
         
    }

    render() {
        // console.log(this); 
        // wskazuje na obiekt Counter metody w return w klasie Component
        return (
            // odwołanie do zmiennej {}
            // nasłuch zdarzenia robimy w atrybucie dając onClick
            <div className="Counter">
            Licznik: <span>{this.state.counterValue}  </span> <br/>
            {/* <button onClick={()=>this.changeValue()}>Dodaj jeden</button> */}
            <ButtonPanel />
            </div>
            // Tak wywołuję metodę tego obiektu - bo to nie funkcja 
            // <button onClick={()=>{this.changeValue()}}>Dodaj jeden</button>
            // w skrócie:
            // <button onClick={()=>this.changeValue()}>Dodaj jeden</button>
            // Zamiast tego <button onClick={function(){console.log('test')}}>Dodaj jeden</button>
            // używamy funkcji strzałkowych <button onClick={()=>{console.log('test')}}>Dodaj jeden</button>
            // przekazanie zmiennej z rodzica do dziecka czyli Counter za pomocą {this.props.initValue}
        );
    }
}

export default Counter;
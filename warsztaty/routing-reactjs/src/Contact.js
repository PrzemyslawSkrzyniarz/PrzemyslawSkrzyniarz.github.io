import React, { Component } from 'react';
import './App.css';

class Contact extends Component {

    constructor() {
        super();

        this.state = {
            classColor: 'blue'
        }
    }

    changeClassColor = (color) => {
        console.log('zmień klasę');
        this.setState({
            classColor: color
        });
    }

    // Ustawienie atrybutu onClick w zaczniku button powoduje, że kliknięcie na (button) przycisk wywołuje metodę changeClassColor klasy Contact która z kolei wywołuję metodę setState powodując zmianę stanu czyli this.state przekazując do metody constructor wartość (przypisaną w button) 'blue' czy 'red', a constructor (rozszerzony metrodą super()) wywołuje metodę render() która wstawia w className w zależności od klikniętęgo przez nas przycisku do którego przypisaliśmy zmienną (która jest klasą ostylowaną w App.css) 'blue' lub 'red'

    render() {
        return (
            <div className="contact">
                <h2 className={this.state.classColor}>Strona kontaktowa</h2>
                <button onClick={() => this.changeClassColor('blue')}>Niebieski</button>
                <button onClick={() => this.changeClassColor('red')}>Czerwony</button>
            </div>

        );
    }
}

export default Contact;

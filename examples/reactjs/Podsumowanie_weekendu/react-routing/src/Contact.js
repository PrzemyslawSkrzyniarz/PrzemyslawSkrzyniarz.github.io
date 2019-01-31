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
   this.setState({classColor: color});
 }
  
  render() {
    return (
      <div className="contakt">
        <h2 className={this.state.classColor}>Strona kontaktowa</h2>
        <button onClick={()=>this.changeClassColor('blue')}>Niebieski</button>
        <button onClick={()=>this.changeClassColor('red')}>Czerwony</button>
      </div>
    );
  }
}

export default Contact;
import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Heading from './Heading';
import Counter from './Counter';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading text="Licznik pierwszy" textSubheading="To jest licznik pierwszy" />
      <Counter initValue={0}/>
        <Heading text="Licznik drugi" textSubheading="To jest licznik drugi"/>
        <Counter initValue={99}/>
      </div>
    );
  }
}

export default App;

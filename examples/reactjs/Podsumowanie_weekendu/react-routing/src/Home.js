import React, { Component } from 'react';
import './App.css';

class Home extends Component {

  constructor() {
      super();

      this.state = {
          headingText: 'Strona główna'
      }
  }

  updateHeading = (e) => {
    this.setState({headingText: e.target.value});
  }

  render() {
    return (
      <div className="home">
        <h2>{this.state.headingText}</h2>
        <input type="text" onChange={this.updateHeading} value={this.state.headingText} />
      </div>
    );
  }
}

export default Home;

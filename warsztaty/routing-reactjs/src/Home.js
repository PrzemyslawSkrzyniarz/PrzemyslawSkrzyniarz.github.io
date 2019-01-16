import React, { Component } from 'react';
import './App.css';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            headinText: 'Strona główna'
    }
  }

  updateHeading = (e) => {
    console.log(e.target.value);
      this.setState({ headinText: e.target.value});
      //target to input, value jest w input, e to zdarzenie/event
  }

    render() {
        return (
            <div className="home">
                <h2>{this.state.headinText}</h2>
                <input type="text" onChange={this.updateHeading} value={this.state.headinText} />
            </div>
        );
    }
}

export default Home;

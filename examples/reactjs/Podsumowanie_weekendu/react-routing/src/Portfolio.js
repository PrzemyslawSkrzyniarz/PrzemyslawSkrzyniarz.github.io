import React, { Component } from 'react';
import './App.css';

class Portfolio extends Component {


  constructor() {
      super();

      this.state = {
          photos: []
      }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(json => { 
        this.setState({photos: json})
    })
  }

  render() {
  
    let figures = this.state.photos.map((elem, index)=>{

      if(index>=10) return false;

      return(
        <figure key={index}>
          <img src={elem.thumbnailUrl} alt={elem.title} />
          <h3>{elem.title}</h3>
        </figure>
      );
    });

    return (
      <div className="portfolio">
        <h2>Strona portfolio</h2>
        {figures}
      </div>
    );
  }
}

export default Portfolio;
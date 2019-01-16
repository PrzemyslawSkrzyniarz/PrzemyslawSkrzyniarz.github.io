import React, { Component } from 'react';
import './App.css';

class Portfolio extends Component {

    constructor() {
        super();

        this.state = {
            photos: []
        }
    }

    // Zapytania AJAX zwykle lepiej robić w componentDidMount() aż się wszystko co stronę stanowi załaduje
    // https://reactjs.org/docs/state-and-lifecycle.html

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(json =>{
                // console.log(json)
                this.setState({ photos: json })
        })
    }

    render() {
        // console.log(this.state.photos);

        let figures = this.state.photos.map((elem, index) =>{

            if(index>=10) return false;

            return(
                <figure key={index}>
                    <img src={elem.thumbnailUrl} alt={elem.title} />
                    <h3>{elem.title}</h3>
                </figure>
            );
        });

        // console.log(figures);
        return (
            <div className="portfolio">
                <h2>Strona Portfolio</h2>
                {figures}
            </div>
            
        );
    }
}

export default Portfolio;
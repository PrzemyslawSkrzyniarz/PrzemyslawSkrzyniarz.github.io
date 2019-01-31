import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


import Home from './Home';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/moje-portfolio">Portfolio</Link></li>
                <li><Link to="/kontakt">Kontakt</Link></li>
              </ul>
            </nav>

            <main className="container">
              <Route exact path="/" component={Home} />
              <Route path="/kontakt" component={Contact} />
              <Route path="/moje-portfolio" component={Portfolio} />
            </main>

            <aside>To jest sidebar</aside>
            <Footer />

        </div>
      </Router>
    );
  }
}

export default App;

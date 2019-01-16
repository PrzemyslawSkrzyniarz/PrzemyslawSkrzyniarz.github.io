import React, { Component } from 'react';
import './App.css';

// Jak robić podstrony w ReactJS
// https://www.nafrontendzie.pl/react-router-wersji-4-wszystko-nowa
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home'
import Contact from './Contact'
import Portfolio from './Portfolio'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/kontakt">Kontant</Link></li>
            </ul>
          </nav>
          <main className="container">
            <Route exact path="/" component={Home} />
            <Route path="/kontakt" component={Contact} />
            <Route path="/portfolio" component={Portfolio} />
          </main>

          <aside>To jest Sidebar</aside>

          <Footer />

        </div>
      </Router >
    );
  }
}

export default App;

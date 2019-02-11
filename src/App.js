import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import ShowCase from './components/ShowCase';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Blog from './components/Blog';

class App extends Component { 

  render() {
    return (
      <Router>
      <div>
        <nav>
          <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/blog"><li>Blog</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
          </ul>  
        </nav>
        <Route exact path="/show" component={() => <ShowCase />} />
        <Route exact path="/" component={() => <Home />} />
        <Route exact path="/about" component={() => <About />} />
        <Route exact path="/blog" component={() => <Blog />} />
        <Route exact path="/contact" component={() => <Contact />} />
        <Route exact path="/hunar_pro/" component={() => <h2 style={{paddingTop: "220px", textAlign: "center", textDecoration: "underline"}}> <Link to="/">Click here to begin</Link></h2>} />
       </div>
  </Router>
    )
  }
}

export default App;

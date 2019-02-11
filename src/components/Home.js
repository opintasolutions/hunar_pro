import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../App.css';

class Home extends Component {
  render(){
    return( 
      <div className="home-page">
        <div className="home-desc">
          <h1>Welcome to Hunar Pro</h1>
          <br /> <br />
        <Link to="/show#page-1">
        <button>
          <h3>Page 1</h3>
          <p>lorem ipsum dolor sit ammet ...lorem ipsum dolor sit ammet ...   </p>
        </button></Link><br />
        <Link to="/show#page-2"><button>
          <h3>Page 2</h3>
          <p>lorem ipsum dolor sit ammet ...lorem ipsum dolor sit ammet ...   </p>
        </button></Link><br />
        <Link to="/show#page-3"><button>
          <h3>Page 3</h3>
          <p>lorem ipsum dolor sit ammet ...lorem ipsum dolor sit ammet ...   </p>
        </button></Link><br />
        <Link to="/show#page-4"><button>
          <h3>Page 4</h3>
          <p>lorem ipsum dolor sit ammet ...lorem ipsum dolor sit ammet ...   </p>
        </button></Link>
        </div>
      <div className="home-pic"></div>
    </div>
    ) 
  }  
}

export default Home;

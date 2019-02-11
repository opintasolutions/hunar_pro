import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../App.css';

class Home extends Component {
  render(){
    return( 
      <div>
        <Link to="/show#page-1">
        <button>
          <h3>Page 1</h3>
          <p>Description</p>
    </button> </Link>
    <Link to="/show#page-2"><button>
          <h3>Page 2</h3>
          <p>Description</p>
    </button> </Link>
    <Link to="/show#page-3"><button>
          <h3>Page 3</h3>
          <p>Description</p>
    </button></Link>
    <Link to="/show#page-4"><button>
          <h3>Page 4</h3>
          <p>Description</p>
    </button></Link>
      </div>
    ) 
  }  
}

export default Home;

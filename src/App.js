import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props); 
    this.state = {
      pageNo: 1  
    }
  }

  componentDidMount(){
    // monitor window scroll
    window.onscroll = () => {
      //let scrollPosY = window.pageYOffset | document.body.scrollTop
      let page1 = document.getElementById("page-1")
      let page2 = document.getElementById("page-2")
      let page3 = document.getElementById("page-3")
      let page4 = document.getElementById("page-4")
      let page1Top = page1.getBoundingClientRect().top
      let page2Top = page2.getBoundingClientRect().top
      let page3Top = page3.getBoundingClientRect().top
      let page4Top = page4.getBoundingClientRect().top
      let scrollConstant = page1.getBoundingClientRect().height * 0.3
      if(page2Top <= scrollConstant && page2Top >= -200){
        this.setState({ pageNo: 2 }) 
        console.log('coming to page 2', this.state)
      } else if(page3Top <= scrollConstant && page3Top >= -200){
        this.setState({ pageNo: 3 })
        console.log('coming to page 3', this.state)
      } else if(page4Top <= scrollConstant && page4Top >= -200){
        this.setState({ pageNo: 4 })
        console.log('coming to page 4', this.state)
      } else if(page1Top <= scrollConstant && page1Top >= -200) {
        this.setState({ pageNo: 1 })  
      } 
    }
  }
  
  render() {
    return (
      <div className="App">
        <div class="page-card" id="page-1">
          <div class="page-desc">
             <h1>Page 1</h1> 
            <h4>Description</h4>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <button class="home-read-more">Read More</button>
     </div>
          <div class="page-pic"></div>
        </div> 
      <div class="page-card" id="page-2">
        <div class="page-desc">
              <h1>Page 2</h1> 
            <h4>Description</h4>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <button class="home-read-more">Read More</button>
      </div>
          <div class="page-pic"></div>
        </div> 
      <div class="page-card" id="page-3">
        <div class="page-desc">
            <h1>Page 3</h1> 
            <h4>Description</h4>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <button class="home-read-more">Read More</button>
      </div>
          <div class="page-pic"></div>
        </div>
      <div class="page-card" id="page-4">
        <div class="page-desc">
             <h1>Page 4</h1> 
            <h4>Description</h4>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <button class="home-read-more">Read More</button>
      </div>
          <div class="page-pic"></div>
        </div>
      <div class="page-nos-indicator">
        {this.state.pageNo === 1 ? <div class="highlighter-circle fill"></div> : <div class="highlighter-circle"></div>}
        {this.state.pageNo === 2 ? <div class="highlighter-circle fill"></div> : <div class="highlighter-circle"></div>}
        {this.state.pageNo === 3 ? <div class="highlighter-circle fill"></div> : <div class="highlighter-circle"></div>}
        {this.state.pageNo === 4 ? <div class="highlighter-circle fill"></div> : <div class="highlighter-circle"></div>}
        { /* <div class="highlighter-circle">{ this.state.pageNo === 1 ? <div class="fill"></div> : null}</div>
        <div class="highlighter-circle">{ this.state.pageNo === 2 ? <div class="fill"></div> : null}</div>
        <div class="highlighter-circle">{ this.state.pageNo === 3 ? <div class="fill"></div> : null}</div>
        <div class="highlighter-circle">{ this.state.pageNo === 4 ? <div class="fill"></div> : null}</div>*/}
      </div>
      </div>
    );
  }
}

export default App;

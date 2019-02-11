import React, { Component } from 'react';
import '../App.css';

class ShowCase extends Component {
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
      let page1Top = page1 ? page1.getBoundingClientRect().top : ""
      let page2Top = page2 ? page2.getBoundingClientRect().top : ""
      let page3Top = page3 ? page3.getBoundingClientRect().top : ""
      let page4Top = page4 ? page4.getBoundingClientRect().top : ""
      let scrollConstant = page1 ? page1.getBoundingClientRect().height * 0.3 : ""
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
        <div className="page-card" id="page-1">
          <div className="page-desc">
             <h1>Page 1</h1> 
            <h4>Description</h4>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <button className="home-read-more">Read More</button>
     </div>
          <div className="page-pic"></div>
        </div> 
      <div className="page-card" id="page-2">
        <div className="page-desc">
              <h1>Page 2</h1> 
            <h4>Description</h4>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <button className="home-read-more">Read More</button>
      </div>
          <div className="page-pic"></div>
        </div> 
      <div className="page-card" id="page-3">
        <div className="page-desc">
            <h1>Page 3</h1> 
            <h4>Description</h4>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <button className="home-read-more">Read More</button>
      </div>
          <div className="page-pic"></div>
        </div>
      <div className="page-card" id="page-4">
        <div className="page-desc">
             <h1>Page 4</h1> 
            <h4>Description</h4>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <p>lorem ipsum dolor sit ammet lorem ipsum dolor sit ammet</p>
            <button className="home-read-more">Read More</button>
      </div>
          <div className="page-pic"></div>
        </div>
      <div className="page-nos-indicator">
        <a href="#page-1"><div id="page1-ind" className={this.state.pageNo === 1 ? "page-pos-box fill-box" : "page-pos-box"}><div className="page-no-txt">Page 1</div><div className={this.state.pageNo === 1 ? "highlighter-circle fill" : "highlighter-circle"}></div></div> </a>
        <a href="#page-2"><div id="page2-ind" className={this.state.pageNo === 2 ? "page-pos-box fill-box" : "page-pos-box"}><div className="page-no-txt">Page 2</div><div className={this.state.pageNo === 2 ? "highlighter-circle fill" : "highlighter-circle"}></div></div> </a>
        <a href="#page-3"><div id="page3-ind" className={this.state.pageNo === 3 ? "page-pos-box fill-box" : "page-pos-box"}><div className="page-no-txt">Page 3</div><div className={this.state.pageNo === 3 ? "highlighter-circle fill" : "highlighter-circle"}></div></div> </a>
        <a href="#page-4"><div id="page4-ind" className={this.state.pageNo === 4 ? "page-pos-box fill-box" : "page-pos-box"}><div className="page-no-txt">Page 4</div><div className={this.state.pageNo === 4 ? "highlighter-circle fill" : "highlighter-circle"}></div></div> </a>
      </div>
      </div>
    );
  }
}

export default ShowCase;

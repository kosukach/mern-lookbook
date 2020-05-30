import React, { Component } from 'react';
import "../App.css";
import Navigation from "./navigation";
import $ from "jquery";
import Hoodies from "./Hoodies";
import Contact from "./Contact";
import CustomWork from "./CustomWork";
import Tees from "./Tees";

var displayedArticle;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      running: false
    }
    this.executeSwap = this.executeSwap.bind(this);
    this.doSwap = this.doSwap.bind(this);
    this.canvasExpand = this.canvasExpand.bind(this);
    this.canvasShrink = this.canvasShrink.bind(this);
    this.changeState = this.changeState.bind(this);
  }
  executeSwap(currentArticle){
    if(!displayedArticle){
      var width1 = 65;
      var width2 = 35;
      var padding;
      var animate = setInterval(()=>{
        width1 -= 0.25;
        width2 += 0.25;
        padding = (width1 - 30)/width1*100
        
        if(width1 <= 30){
          clearInterval(animate);
          $(`#${currentArticle}`).fadeIn().css({
            display: "grid"
          })
          
        }else{
          
          $("#grid-root").css({"grid-template-columns": `${width1}% ${width2}%`})
          $("#list").css({"padding-left": `${padding}%`})
        }
      }, 1)
    }
    else{
      
      
     
      $(`#${displayedArticle}`).fadeOut(
        ()=> {
          if(displayedArticle !== "contact"){
            $(`#${displayedArticle}`).children().css({"display": "none"});
          }
          $(`.display-grid`).css({"display": "grid"});
          $(".item").css({"display": "none"})
          $(`#${currentArticle}`).fadeIn().css({"display": "grid"});
        });
      
      
        
      
    }
    
    displayedArticle = currentArticle;
    
    
  }
  changeState(){
    this.setState({running: false})
  }
  doSwap(currentArticle){
    
    this.setState({running: true});
    this.executeSwap(currentArticle);
    setTimeout(()=>{
      this.changeState();
    }, 1000);
    
    
  }
  

  canvasExpand(pos, str){
    let elem = $(`#${str}-${pos}`);
    this.setState({displayGridItemWidth: elem.width()});
    this.setState({displayGridItemHeight: elem.height()});
    elem.parent().fadeOut(500);
    elem.parent().parent().append("<canvas></canvas>");
    let c = document.getElementsByTagName("canvas")[0];
    c.height = elem.parent().height();
    c.width = elem.parent().width();
    let ctx = c.getContext("2d");
    ctx.fillStyle = "#766f82";
    function RectExpand(){
      this.x = pos%4*(10 + elem.width());
      this.y = parseInt(pos/4)*(10 + elem.height());
      this.width = elem.width();
      this.height = elem.height();
      this.xLimit = elem.parent().width();
      this.yLimit = elem.parent().height();
      this.draw = () => {
        ctx.fillRect(this.x, this.y, this.width, this.height)
      };
      this.update = () => {
        
        this.x -= this.x/10;
        this.y -= this.y/10;
        this.width += (this.xLimit-this.width)/10;
        this.height += (this.yLimit-this.height)/10;
        this.draw();
      }
    }
    
    let rectangle = new RectExpand();
    rectangle.draw();
    let animatePromise = new Promise((resolve, reject)=>{
      function animate(){
        if(!(parseInt(rectangle.x) === 0 && parseInt(rectangle.y) === 0 &&
         parseInt(rectangle.width) === parseInt(rectangle.xLimit) 
         && parseInt(rectangle.height) === parseInt(rectangle.yLimit))){
          requestAnimationFrame(animate);
        }else{
          resolve();
        }
        rectangle.update();
      }
      setTimeout(()=>{animate();}, 500)
      
    });
    animatePromise.then(()=>{
      $("canvas").remove();
      $(`#${str}-item-${pos}`).css({"display": "grid"});
      $(`#${str}-item-${pos}`).children().fadeIn().css({"display": "grid"});
    });
    
  }

  canvasShrink(pos, str){
    let elem = $(`#${str}-item-${pos}`);
    console.log(elem);
    let outerHeight = elem.height();
    let outerWidth =  elem.width();
    elem.children().fadeOut();
    elem.fadeOut();
    elem.parent().append("<canvas></canvas>");
    let c = document.getElementsByTagName("canvas")[0];
    c.height = outerHeight
    c.width = outerWidth
    let ctx = c.getContext("2d");
    ctx.fillStyle = "#766f82";
    
    function RectShrink(widthLimit, heightLimit){
      
      this.x = 0;
      this.y = 0;
      this.xLimit = pos%4*(10 + widthLimit);
      this.yLimit = parseInt(pos/4)*(10 + heightLimit);
      this.width = outerWidth;
      this.height = outerHeight;
      this.widthLimit = widthLimit;
      this.heightLimit = heightLimit;
      this.draw = () => {
        ctx.fillRect(this.x, this.y, this.width, this.height);
       
        
      };
      this.update = () => {
        
        this.x += (this.xLimit-this.x)/10;
        this.y += (this.yLimit-this.y)/10;
        this.width -= (this.width-this.widthLimit)/10;
        this.height -= (this.height-this.heightLimit)/10;
        
        this.draw();
      }
    }
    
    let rect = new RectShrink(this.state.displayGridItemWidth, this.state.displayGridItemHeight);
    rect.draw();
    let animatePromise = new Promise((resolve, reject)=>{
      function animate(){
      
        if(!(parseInt(rect.x) == parseInt(rect.xLimit) && parseInt(rect.y) == parseInt(rect.yLimit)
         && parseInt(rect.width) == parseInt(rect.widthLimit) && parseInt(rect.x) == parseInt(rect.xLimit))){
          requestAnimationFrame(animate);
         }else{
           resolve();
         }
       
        ctx.clearRect(0, 0, outerWidth, outerHeight)
        rect.update();
        
        
      }
      setTimeout(()=>{
        animate();
      }, 500);
    });
    animatePromise.then(()=> {
      $("canvas").remove();
      $(`#${str}-grid`).fadeIn(500).css({"display": "grid"});
    });
  }

  

  render(){
    return (
      <div className="App" id="grid-root">
        <Navigation 
          handleClickLink = {this.state.running ?  ()=>{console.log("running")} : this.doSwap}
        />
      
      <Tees 
        handleClickImage = {this.canvasExpand} 
        handleBack = {this.canvasShrink}
        handleOrder = {this.doSwap}
      />
      <Hoodies 
        handleClickImage = {this.canvasExpand} 
        handleBack = {this.canvasShrink}
        handleOrder = {this.doSwap}
      />
      
      <CustomWork  
        handleClickImage = {this.canvasExpand}
      />   
      <Contact />     
      </div>
    );
  }
}

export default App;

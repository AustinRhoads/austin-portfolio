import React, { Component } from 'react'
import './App.css';

import Home from './components/Home.js';
import Navbar from './components/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';

class App extends Component{


  scroll_to = (dest) => {

    let topOfDestinationElement = document.getElementById(dest).offsetTop

    window.scrollTo(0, topOfDestinationElement)

  }


  render (){
    return(
      <div className="App">
        <Home scroll_to={this.scroll_to} />
        <Navbar scroll_to={this.scroll_to} />
        <About />
        <Portfolio />
        <Blog />
        <Contact />
      </div>
    )
 
  };
}

export default App;










window.addEventListener('scroll', ()=> {

      const navbar = document.getElementById('nav-bar');

      if(window.pageYOffset > (window.innerHeight + (window.innerHeight * 0.2)) && !navbar.classList.contains('fixed')){
      
         navbar.classList.add('fixed')
      
      } else if (window.pageYOffset < window.innerHeight && navbar.classList.contains('fixed')){

          navbar.classList.remove('fixed')
      
      }
 
})
import React, { Component } from 'react'
import './App.css';

import Home from './components/Home.js'
import About from './components/About';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';

class App extends Component{
  render (){
    return(
      <div className="App">
        <Home />
        <About />
        <Portfolio />
        <Blog />
        <Contact />
      </div>
    )
 
  };
}

export default App;

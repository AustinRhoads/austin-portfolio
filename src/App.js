import React, { Component } from 'react'
import './App.css';

import Home from './components/Home.js'
import About from './components/About';

class App extends Component{
  render (){
    return(
      <div className="App">
        <Home />
        <About />
      </div>
    )
 
  };
}

export default App;

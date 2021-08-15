import React, { Component } from 'react' 

class Home extends Component{
    render(){
        return(
            <div id="home">

                <div id="home-text">
                Hello, I'm Austin Rhoads.
                <br />
                I'm a full-stack web developer.
                </div>

                <a className="page-link" href="#portfolio-div">
                <div className="page-link-div">
                    View my work
                </div>
                </a>
                
            </div>
        )
    }
}

export default Home;
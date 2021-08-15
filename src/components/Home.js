import React, { Component } from 'react' 

class Home extends Component{
    render(){
        return(
            <div id="home-div">

                <div id="text">
                Hello, I'm Austin Rhoads.
                <br />
                I'm a full-stack web developer.
                </div>
                
                <div className="page-link">
                    View my work
                </div>
                
            </div>
        )
    }
}

export default Home;
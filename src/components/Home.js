import React, { Component } from 'react' 

class Home extends Component{
    render(){
        return(
            <section id="home">

                <div id="home-text">
                Hello, I'm <span id="name-span">Austin Rhoads</span>.
                <br />
                I'm a full-stack web developer.
                </div>

                <div className="page-link" dest="portfolio-div" >
                <div className="page-link-div" onClick={() => this.props.scroll_to("portfolio-div")}>
                    View my work
                </div>
                </div>
                
            </section>
        )
    }
}

export default Home;
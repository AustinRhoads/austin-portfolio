import React, { Component } from 'react' 

class Navbar extends Component {

    render(){
        return(
            <div id="nav-bar" className="nav-bar">
                <div className="nav-link"onClick={() => this.props.scroll_to("home")}>Home</div>
                <div className="nav-link"onClick={() => this.props.scroll_to("about-all")}>About</div>
                <div className="nav-link"onClick={() => this.props.scroll_to("portfolio-div")}>Projects</div>
                <div className="nav-link"onClick={() => this.props.scroll_to("blog-div")}>Blog</div>
                <div className="nav-link"onClick={() => this.props.scroll_to("contact-div")}>Contact</div>

            </div>

        )
    }
}
export default Navbar;
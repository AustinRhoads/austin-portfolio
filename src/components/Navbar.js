import React, { Component } from 'react' 

class Navbar extends Component {

    render(){
        return(
            <div id="nav-bar" className="nav-bar">
                <div className="nav-link"onClick={() => this.props.scroll_to("home")}>HOME</div>
                <div className="nav-link"onClick={() => this.props.scroll_to("about-all")}>ABOUT</div>
                <div className="nav-link"onClick={() => this.props.scroll_to("portfolio-div")}>PROJECTS</div>
                <div className="nav-link"onClick={() => this.props.scroll_to("blog-div")}>BLOG</div>
                <div className="nav-link"onClick={() => this.props.scroll_to("contact-div")}>CONTACT</div>

            </div>

        )
    }
}
export default Navbar;
import React, { Component } from 'react' 

class Navbar extends Component {

    toggle_responsive = () => {

        var navbar = document.getElementById('nav-bar');

        if(navbar.className === "nav-bar"){
            navbar.className = "nav-bar responsive";
        } else if(navbar.className === "nav-bar fixed"){
            navbar.className = "nav-bar fixed responsive";
        } else if(navbar.className === "nav-bar fixed responsive") {
            navbar.className = "nav-bar fixed"
        } else {
            navbar.className = "nav-bar"
        }


    }




    render(){
        return(
            <div id="nav-bar" className="nav-bar">
                
                    <div className="nav-link"onClick={() => this.props.scroll_to("home")}>HOME</div>
                    <div className="nav-link"onClick={() => this.props.scroll_to("about-all")}>ABOUT</div>
                    <div className="nav-link"onClick={() => this.props.scroll_to("portfolio-div")}>PROJECTS</div>
                    <div className="nav-link"onClick={() => this.props.scroll_to("blog-div")}>BLOG</div>
                    <div className="nav-link"onClick={() => this.props.scroll_to("contact-div")}>CONTACT</div>
                
                <i id="nav-icon" onClick={() => this.toggle_responsive()}>
                    <div id="nav-icon-line-1"></div>
                    <div id="nav-icon-line-2"></div>
                    <div id="nav-icon-line-3"></div>
                    <div id="nav-icon-line-4"></div>
                </i>

            </div>

        )
    }
}
export default Navbar;
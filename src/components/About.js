import React, { Component } from 'react' 
import me_neo from '../me_neo.jpg'
import js_logo from '../javascript-logo-hq-png-1.png'
import node_js_logo from '../javascript-nodejs-logo-27.png'
import sql_logo from '../kisspng-microsoft-sql-server-mysql-database-logo-5b098c6ee92a46.0488681015273524309551.png'
import npm_logo from '../kisspng-npm-node-js-computer-icons-computer-software-insta-5b278c9a7f3538.4925424915293185545211.png'
import ruby_logo from '../kisspng-ruby-on-rails-programming-language-computer-progra-ruby-5aeaadacb87f72.0089505615253293247557.png'
import rails_logo from '../rails_logo.png'
import react_logo from '../logo512.png'
import html5_logo from '../html5-logo-html-logo-2.png'
import css_logo from '../css_logo.png'


class About extends Component {



    render(){
        return(
            <section id="about-all">
                <div id="about-div">
                    <div id="about-header" >ABOUT</div>
                <div id="about-values-wrapper">
                    <div className="about-values-row">
                        <div className="about-values-item">
                            <div className="value-header">Fortitude</div>
                            <div>Fast and scalable code that grows with your needs.</div>
                        </div>
                        <div className="about-values-item">
                            <div className="value-header">Pixel Perfect Layout</div>
                            <div>Clearly thought out implementation of your design.</div> 
                        </div>
                    </div>
                    <div className="about-values-row">
                        <div className="about-values-item">
                            <div className="value-header">Dynamic</div>
                            <div>Intuitive and responsive UI/UX that allow your ideas come to life.</div> 
                        </div>
                        <div className="about-values-item">
                            <div className="value-header">Inventive</div>
                            <div>Have some new ideas? Let's make them work.</div>
                        </div>
                    </div>
                </div>
                <div id="about-skills-wrapper">
                    <div id="about-skill-wrapper-img-div"> 
                        <img  alt="me_neo" src={me_neo} />
                    </div>
                    <div id="about-skills-list">
                        <div className="about-skills-item" >Javascript</div>
                        <div className="about-skills-item" >React</div>
                        <div className="about-skills-item" >HTML</div>
                        <div className="about-skills-item" >CSS</div>
                        <div className="about-skills-item" >Ruby</div>
                        <div className="about-skills-item" >Rails</div>
                        <div className="about-skills-item" >SQL</div>
                        <div className="about-skills-item" >Node.js</div>

                    </div>
                   
                </div>
            
                </div>
            </section>
        )
    }
}

export default About;


//<img className="about-skills-logo" alt="js" src={js_logo} />
//<img className="about-skills-logo" alt="reactlogo" src={react_logo} />
//<img className="about-skills-logo" alt="html5" src={html5_logo} />
//<img className="about-skills-logo" alt="css" src={css_logo} />
//<img className="about-skills-logo" alt="ruby" src={ruby_logo} />
//<img className="about-skills-logo" alt="rails" src={rails_logo} />
//<img className="about-skills-logo" alt="npm" src={npm_logo} />
//<img className="about-skills-logo" alt="nodejs" src={node_js_logo} />
//<img className="about-skills-logo" alt="sql" src={sql_logo} />
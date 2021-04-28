import React from 'react';

import logo from "../images/logo.png";

import '../modulesCSS/Homepage.css';

const Homepage = () => {

    return <div className="ui container" id="homepage">

            <div className="title-block">
            <img src={logo} className="ui centered medium circular image" />
                <h1 className="ui header centered">Flock is Lorem Ipsum</h1>
            </div>

            <div>
                <h2 className="ui header centered">It can be used for</h2>
                <div className="ui thre column centered grid">
                    <div className="five wide column">
                        <div className="ui segment">
                            <h2>
                                Personal use
                        </h2>
                        </div>
                    </div>

                    <div className="five wide column">
                        <div className="ui segment">
                            <h2>
                                Business use
                        </h2>
                        </div>
                    </div>

                    <div className="five wide column">
                        <div className="ui segment">
                            <h2>
                                Company use
                        </h2>
                        </div>
                    </div>

                </div>
            </div>

            <div>
                <div className="ui list">
                    <a className="item">
                        <i className="right triangle icon"></i>
                        <div className="content">
                            <h3 className="header">Personal use</h3>
                            <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </div>
                        </div>
                    </a>
                    <a className="item">
                        <i className="right triangle icon"></i>
                        <div className="content">
                            <h3 className="header">Business use</h3>
                            <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                        </div>
                    </a>
                    <a className="item">
                        <i className="right triangle icon"></i>
                        <div className="content">
                            <h3 className="header">Company use</h3>
                            <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                        </div>
                    </a>
                </div>
            </div>

            <div>
                <h2>Why you must use Flock</h2>
                <div className="ui  list">
                    <a className="item">
                        <div className="content">
                            <h3 className="header">Alpha</h3>
                            <div className="description">Alpha is the first letter</div>
                        </div>
                    </a>
                    <a className="item">
                        <div className="content">
                            <h3 className="header">Beta</h3>
                            <div className="description">Beta is the second letter</div>
                        </div>
                    </a>
                </div>
            </div>

            <div>
                <h4 className="ui center aligned header">For more information contact us at info@flock.com</h4>
                <div className="ui three column centered grid icons">
                    <div className="two wide column ">
                        <a href="https://www.facebook.com/">
                            <h2 className="ui center aligned icon header">
                                <i className="circular facebook icon"></i>

                            </h2>
                        </a>
                    </div>

                    <div className="two wide column">
                        <a href="https://www.instagram.com/">
                            <h2 className="ui center aligned icon header">
                                <i className="circular instagram icon"></i>

                            </h2>
                        </a>

                    </div>

                    <div className="two wide column">
                        <a href="https://www.linkedin.com/">
                            <h2 className="ui center aligned icon header">
                                <i className="circular linkedin icon"></i>

                            </h2>
                        </a>

                    </div>

                </div>




            </div>

        </div>
        
        

}

 export default Homepage;


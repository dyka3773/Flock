import React from 'react';

import logo from "../images/logo.png";

import '../modulesCSS/Homepage.css';

const Homepage = () => {

    return <div class="ui container" id="homepage">

            <div class="title-block">
            <img src={ logo} class="ui centered medium circular image" />
                <h1 class="ui header centered">Flock is Lorem Ipsum</h1>
            </div>

            <div>
                <h2 class="ui header centered">It can be used for</h2>
                <div class="ui thre column centered grid">
                    <div class="five wide column">
                        <div class="ui segment">
                            <h2>
                                Personal use
                        </h2>
                        </div>
                    </div>

                    <div class="five wide column">
                        <div class="ui segment">
                            <h2>
                                Business use
                        </h2>
                        </div>
                    </div>

                    <div class="five wide column">
                        <div class="ui segment">
                            <h2>
                                Company use
                        </h2>
                        </div>
                    </div>

                </div>
            </div>

            <div>
                <div class="ui list">
                    <a class="item">
                        <i class="right triangle icon"></i>
                        <div class="content">
                            <h3 class="header">Personal use</h3>
                            <div class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </div>
                        </div>
                    </a>
                    <a class="item">
                        <i class="right triangle icon"></i>
                        <div class="content">
                            <h3 class="header">Business use</h3>
                            <div class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                        </div>
                    </a>
                    <a class="item">
                        <i class="right triangle icon"></i>
                        <div class="content">
                            <h3 class="header">Company use</h3>
                            <div class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                        </div>
                    </a>
                </div>
            </div>

            <div>
                <h2>Why you must use Flock</h2>
                <div class="ui  list">
                    <a class="item">
                        <div class="content">
                            <h3 class="header">Alpha</h3>
                            <div class="description">Alpha is the first letter</div>
                        </div>
                    </a>
                    <a class="item">
                        <div class="content">
                            <h3 class="header">Beta</h3>
                            <div class="description">Beta is the second letter</div>
                        </div>
                    </a>
                </div>
            </div>

            <div>
                <h4 class="ui center aligned header">For more information contact use at info@flock.com</h4>
                <div class="ui three column centered grid icons">
                    <div class="two wide column ">
                        <a href="https://www.facebook.com/">
                            <h2 class="ui center aligned icon header">
                                <i class="circular facebook icon"></i>

                            </h2>
                        </a>
                    </div>

                    <div class="two wide column">
                        <a href="https://www.instagram.com/">
                            <h2 class="ui center aligned icon header">
                                <i class="circular instagram icon"></i>

                            </h2>
                        </a>

                    </div>

                    <div class="two wide column">
                        <a href="https://www.linkedin.com/">
                            <h2 class="ui center aligned icon header">
                                <i class="circular linkedin icon"></i>

                            </h2>
                        </a>

                    </div>

                </div>




            </div>

        </div>
        
        

}

 export default Homepage;


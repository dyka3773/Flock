import React from 'react';

import logo from "../images/logo.png";

import personal from "../images/Personal.png";

import business from "../images/Business.png";

import company from "../images/Company.png";

import '../modulesCSS/Homepage.css';

const Homepage = () => {

    return <div className="ui container" id="homepage">

            <div className="title-block">
            <img src={logo} className="ui centered medium circular image" />
                <h1 className="ui header centered">Our emails travel faster than a Flock of pigeons</h1>
            </div>

            <div>
                <h2 className="ui header centered">It can be used for</h2>
                <div className="ui thre column centered grid">
                    <div className="five wide column">
                        <div className="ui segment">
                            <h2>
                            Personal use
                        </h2>
                        <img src={personal} className="ui centered medium circular image" />
                        </div>
                    </div>

                    <div className="five wide column">
                        <div className="ui segment">
                            <h2>
                            Business use
                        </h2>
                        <img src={business} className="ui centered medium circular image" />
                        </div>
                    </div>

                    <div className="five wide column">
                        <div className="ui segment">
                            <h2>
                            Company use
                        </h2>
                        <img src={company} className="ui centered medium circular image" />
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
                        <div className="description">If you ever wanted to send something to your friends, but you are bored to do it for each and every one of them, then Flock has you covered for it!</div>
                        </div>
                    </a>
                    <a className="item">
                        <i className="right triangle icon"></i>
                        <div className="content">
                            <h3 className="header">Business use</h3>
                        <div className="description">Freelancing or having your own website might be hard promoting your campaigns. With Flock, you can easily send your campaigns to your subscribers and tell them about everything!</div>
                        </div>
                    </a>
                    <a className="item">
                        <i className="right triangle icon"></i>
                        <div className="content">
                            <h3 className="header">Company use</h3>
                        <div className="description">The hardest thing for a boss is to remember all the names of his employees, left aside all of their emails. With Flock, their job informing that you are fired will be easier!</div>
                        </div>
                    </a>
                </div>
            </div>

            <div>
                <h2>Why you must use Flock</h2>
                <div className="ui  list">
                    <a className="item">
                        <div className="content">
                            <h3 className="header">It is User Friendly</h3>
                            <div className="description">Flock is made in a way where every person can use it without having to struggle. Everything is in front of the user, making his expirience much more enjoyable</div>
                        </div>
                    </a>
                    <a className="item">
                        <div className="content">
                            <h3 className="header">It supports Markdown</h3>
                            <div className="description">Some people love to use custom made texts, like heading or bold. Flock is having you covered. Every campaign that we use supports Markdown, making customization a playful job for the user</div>
                        </div>
                    </a>
                    <a className="item">
                        <div className="content">
                            <h3 className="header">The coloring</h3>
                        <div className="description">Plenty of users have problem with bright colors, so they just use Dark Mode instead. Flock's colors are chosen in a way that the eyes will be protected from the brightness, thus working with our site is not eye tiring</div>
                        </div>
                    </a>
                </div>
            </div>

            <div>
                <h4 className="ui center aligned header">For more information contact us at info@flock.com</h4>
                <div className="ui three column centered grid icons">
                    <div className="two wide column ">
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                            <h2 className="ui center aligned icon header">
                                <i className="circular facebook icon"></i>

                            </h2>
                        </a>
                    </div>

                    <div className="two wide column">
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                            <h2 className="ui center aligned icon header">
                                <i className="circular instagram icon"></i>

                            </h2>
                        </a>

                    </div>

                    <div className="two wide column">
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
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


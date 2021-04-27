import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import axios from 'axios';

import Dashboard from './modules/Dashboard';
import ContactManagement from './modules/ContactManagement';
import CampaignManagement from './modules/CampaignManagement';
import Page1 from './modules/page1';
import LogIn from './modules/LogIn';
import SignUp from './modules/SignUp';
import AccountSettings from './modules/AccountSettings';
import Homepage from './modules/Homepage';

import logo from "./images/logo.png";



const App = () => {
    const [hidden, setHidden] = useState("");
    
    const loggedIn = false;

    const toggleCollapse = () => {

        hidden === "" ?
            setHidden("hidden")
            :
            setHidden("")
        
        
    }


    const layout = loggedIn ?
        <>
            <div className="ui stackable menu" id="main-navbar">


                <span className="header item">
                    <img className="logo" src={logo} />
                    <button className="item ui basic primary button" id="unhide" onClick={toggleCollapse}>\/</button>
                </span>

                <NavLink className={`hide item ${hidden}`} to="/" exact>Home</NavLink>

                <NavLink className={`hide item ${hidden}`}  to="/campaign-management">Campaigns</NavLink>

                <NavLink className={`hide item ${hidden}`}  to="/contact-management">Contact List</NavLink>



                <NavLink className={`hide right item ${hidden}`} to="/account-settings">Account Settings</NavLink>

                <NavLink className={`hide item ${hidden}`} to="/">Log Out</NavLink>
                
                
            </div>

            

            {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}

            <Switch>
                <Route path="/account-settings">
                    <AccountSettings />
                </Route>
                <Route path="/test">
                    <Page1 />
                </Route>
                <Route path="/campaign-management">
                    <CampaignManagement />
                </Route>
                <Route path="/contact-management">
                    <ContactManagement />
                </Route>
                <Route path="/">
                    <Dashboard />
                </Route>

            </Switch>
        </>
        :
        <>
            <div className="ui menu" id="main-navbar">
                <span className="item">
                    <img src={logo} />
                </span>

                <NavLink className="item" activeClassName="active" to="/" exact>Home</NavLink>
                <span className="right">
                    <NavLink className="item" to="/log-in">Log In</NavLink>
                    <NavLink className="item" to="/sign-up">Sign Up</NavLink>
                </span>
            </div>

            {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}

            <Switch>
                <Route path="/log-in">
                    <LogIn />
                </Route>
                <Route path="/sign-up">
                    <SignUp />
                </Route>
                <Route path="/">
                    <Homepage />
                </Route>

            </Switch>
        </>

    return (
        <Router>
            <div id="app">
                {layout}
            </div >
        </Router >
    );

}

export default App;


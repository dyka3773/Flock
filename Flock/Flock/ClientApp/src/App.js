import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";

import Dashboard from './modules/Dashboard';
import ContactManagement from './modules/ContactManagement';
import CampaignManagement from './modules/CampaignManagement';
import Page1 from './modules/page1';
import LogIn from './modules/LogIn';
import SignUp from './modules/SignUp';
import axios from 'axios';
import logo from "./images/logo.png";



const App = () => {

    const loggedIn = true;
    useEffect(() => {
        
        axios.get('/apis/Contacts')
            .then((re) => { console.log("Contacts"); console.log(re.data); });

        
        axios.get('/apis/Groups')
            .then((re) => { console.log("Groups"); console.log(re.data); });

        
        axios.get('/apis/Companies')
            .then((re) => { console.log("Companies"); console.log(re.data); });

       
        axios.get('/apis/Campaigns')
            .then((re) => { console.log("Campaigns"); console.log(re.data); });

        
        axios.get('/apis/BusinessPersonals')
            .then((re) => { console.log("BusinesPersonals"); console.log(re.data); });
    })
    

    const layout = loggedIn ?
        <>
            <div className="ui menu" id="main-navbar">
                <span className="item ">
                    
                        <img className="logo" src={logo} />
                    
                </span>

                <NavLink className="item" activeClassName="active" to="/" exact>Home</NavLink>

                <NavLink className="item" activeClassName="active" to="/campaign-management">Campaigns</NavLink>

                <NavLink className="item" activeClassName="active" to="/contact-management">Contact List</NavLink>

                <NavLink className="item right" to="/test">Log Out</NavLink>
            </div>

            {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}

            <Switch>
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
                    <div>Homepage under construction!</div>
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


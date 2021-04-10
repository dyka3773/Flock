import React, { useEffect } from 'react';
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

import logo from "./images/logo.png";



const App = () => {

    const loggedIn = true;
    useEffect(() => {
        const func = async () => {

            const re1 = await axios.get('/apis/Contacts');

            console.log(re1.data);


            const re = await axios.post('/apis/Contacts', {
                id: 69, fullName: "69696969", email: "696969@gmail.com"
            })
            
            console.log(re.data);
        }
        

        func();
        

        
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

                <span className="right">
                    <NavLink className="item" to="/account-settings">Account Settings</NavLink>
                    <NavLink className="item" to="/test">Log Out</NavLink>
                </span>
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


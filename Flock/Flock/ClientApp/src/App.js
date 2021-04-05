import React from 'react';
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

const App = () => {

    const loggedIn = false;

    const layout = loggedIn ?
        <>
            <div className="ui menu" id="main-navbar">
                <span className="item"> Flock </span>

                <NavLink className="item" activeClassName="active" to="/" exact>Home</NavLink>

                <NavLink className="item" activeClassName="active" to="/campaign-management">Campaigns</NavLink>

                <NavLink className="item" activeClassName="active" to="/contact-management">Contact List</NavLink>

                <NavLink className="item" activeClassName="active" to="/test">test</NavLink>

                <NavLink className="item right" to="/test">Log Out</NavLink>
            </div>

            {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}

            <Switch>
                <Route path="/campaign-management">
                    <CampaignManagement />
                </Route>
                <Route path="/contact-management">
                    <ContactManagement />
                </Route>
                <Route path="/test">
                    <Page1 />
                </Route>
                <Route path="/">
                    <Dashboard />
                </Route>

            </Switch>
        </>
        :
        <>
            <div className="ui menu" id="main-navbar">
                <span className="item"> Flock </span>

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
                <Route path="/campaign-management">
                    <CampaignManagement />
                </Route>
                <Route path="/contact-management">
                    <ContactManagement />
                </Route>
                <Route path="/test">
                    <Page1 />
                </Route>
                <Route path="/">
                    <Dashboard />
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


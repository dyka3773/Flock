import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";

import Page1 from './modules/page1';
import ManagementModule from './modules/ManagementModule';
import ContactManagement from './modules/ContactManagement';
import CampaignManagement from './modules/CampaignManagement';

const App = () => {




    return (
        <Router>
            <div id="app">
                <div className="ui menu" id="main-navbar">
                    <span className="item"> Flock </span>

                    <NavLink className="item" activeClassName="active" to="/" exact>Home</NavLink>

                    <NavLink className="item" activeClassName="active" to="/campaign-management">Campaigns</NavLink>

                    <NavLink className="item" activeClassName="active" to="/contact-management">Contact List</NavLink>
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
                    <Route path="/">
                        <Page1 />
                    </Route>
                </Switch>
            </div>
        </Router >
    );

}

export default App;


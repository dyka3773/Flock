import React from 'react';
import Page1 from './modules/page1';
import ManagementModule from './modules/ManagementModule';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";


const App = () => {




    return (
        <Router>
            <div id="app">
                <div className="ui menu" id="main-navbar">
                    <NavLink className="item" ></NavLink>

                    <NavLink className="item" activeClassName="active" to="/" exact>Home</NavLink>

                    <NavLink className="item" activeClassName="active" to="/campaign-management">Contact List</NavLink>

                    <NavLink className="item" activeClassName="active" to="/contact-management">Campaigns</NavLink>
                </div>

                {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/campaign-management">
                        <ManagementModule />
                    </Route>
                    <Route path="/contact-management">
                        <ManagementModule />
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


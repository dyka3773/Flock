import React from 'react';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
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
        <div>
            <div className="ui menu">
                <NavLink className="item" activeClassName="active" to="/" exact>Page1</NavLink>

                <NavLink className="item" activeClassName="active" to="/page2">Page2</NavLink>

            </div>

            {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/page2">
                    <Page2 />
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


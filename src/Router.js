import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Ul, Li, Div } from "glamorous";
import { Users } from "./containers/Users";
import { Home } from "./containers/Home";
import { Week } from "./containers/Week";

export const MyRouter = () => (
    <Router>
        <Div>
            <Ul>
                <Li>
                    <Link to="/">Home</Link>
                </Li>
                <Li>
                    <Link to="/users">Users</Link>
                </Li>
                <Li>
                    <Link to="/week">Forecast</Link>
                </Li>
            </Ul>
            <Route exact path="/" component={Home} />
            <Route path="/users" component={Users} />
            <Route path="/week" component={Week} />
        </Div>
    </Router>
);

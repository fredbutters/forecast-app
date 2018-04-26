import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import { Users } from "./containers/Users";
import { Home } from "./containers/Home";
import { Reddit } from "./containers/Reddit";
import { Forecast } from "./containers/Forecast";
import glamorous, { Ul, Div } from "glamorous";

const Item = glamorous.li({
    display: "inline-block",
    marginLeft: "30px"
});

const MyNavLink = glamorous(NavLink)({
    display: "inline-block",
    color: "#666",
    marginRight: 20,
    marginBottom: 20,
    [".active"]: {
        color: "#000",
        fontWeight: "bold"
    }
});
export const MyRouter = () => {
    let selectedStyle = { fontWeight: "bold" };
    return (
        <Router>
            <Div>
                <MyNavLink to="/home">Home</MyNavLink>
                <MyNavLink to="/users">Users</MyNavLink>
                <MyNavLink to="/reddit">Reddit</MyNavLink>
                <MyNavLink to="/forecast">Forecast</MyNavLink>
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route path="/users" component={Users} />
                    <Route path="/reddit" component={Reddit} />
                    <Route path="/forecast" component={Forecast} />
                </Switch>
            </Div>
        </Router>
    );
};

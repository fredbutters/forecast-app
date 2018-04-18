import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Ul, Div } from "glamorous";
import { Users } from "./containers/Users";
import { Home } from "./containers/Home";
import { Reddit } from "./containers/Reddit";
import { Forecast } from "./containers/Forecast";
import glamorous from "glamorous";

const Item = glamorous.li({
    display: "inline-block",
    marginLeft: "30px"
});
export const MyRouter = () => (
    <Router>
        <Div>
            <Ul>
                <Item>
                    <Link to="/">Home</Link>
                </Item>
                <Item>
                    <Link to="/users">Users</Link>
                </Item>
                <Item>
                    <Link to="/reddit">Reddit</Link>
                </Item>
                <Item>
                    <Link to="/forecast">Forecast</Link>
                </Item>
            </Ul>
            <Route exact path="/" component={Home} />
            <Route path="/users" component={Users} />
            <Route path="/reddit" component={Reddit} />
            <Route path="/forecast" component={Forecast} />
        </Div>
    </Router>
);

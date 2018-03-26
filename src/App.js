import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
// import store from "./store";
import glamorous from "glamorous";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createEpicMiddleware } from "redux-observable";

import { Week } from "./containers/Week";
import { Users } from "./containers/Users";
import reducers from "./reducers/";
import epics from "./epics";

const rootReducer = combineReducers({
    ...reducers
});
// let store = createStore(rootReducer);

let store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(createEpicMiddleware(epics)))
);

const Container = glamorous.div({
    padding: "15px"
});
const App = () => (
    <Provider store={store}>
        <Container>
            <Users />
        </Container>
    </Provider>
);

render(<App />, document.getElementById("root"));

export default App;

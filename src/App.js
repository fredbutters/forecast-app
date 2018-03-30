import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import glamorous from "glamorous";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createEpicMiddleware } from "redux-observable";

// import { Week } from "./containers/Week";
// import { Users } from "./containers/Users";
import { MyRouter as Router } from "./Router";
import reducers from "./reducers/";
import epics from "./epics";

const rootReducer = combineReducers({
    ...reducers
});

let store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(createEpicMiddleware(epics)))
);

const Wrapper = glamorous.div({
    padding: "15px"
});
const App = () => (
    <Provider store={store}>
        <Wrapper>
            <Router />
        </Wrapper>
    </Provider>
);

render(<App />, document.getElementById("root"));

export default App;

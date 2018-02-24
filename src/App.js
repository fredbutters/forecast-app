import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store";

import { Week } from "./containers/Week";

const App = () => (
    <Provider store={store}>
        <Week />
    </Provider>
);

render(<App />, document.getElementById("root"));

export default App;

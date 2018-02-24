import { createStore, combineReducers } from "redux";
import { reducer as weekReducer } from "./reducers/week";

const rootReducer = combineReducers({
    weekReducer
});
export default createStore(rootReducer);

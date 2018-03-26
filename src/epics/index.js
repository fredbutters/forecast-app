import { combineEpics } from "redux-observable";
import { epic as EpicUsers } from "../containers/Users";
import { epic as EpicWeek } from "../containers/Week";

export default combineEpics(EpicWeek, EpicUsers);

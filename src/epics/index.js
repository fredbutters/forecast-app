import { combineEpics } from "redux-observable";
import { loadUsers as EpicUsers } from "../containers/Users";
import { getMoreUsers as EpicGetUsers } from "../containers/Users";
import { epic as EpicWeek } from "../containers/Week";

export default combineEpics(EpicWeek, EpicUsers, EpicGetUsers);

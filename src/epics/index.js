import { combineEpics } from "redux-observable";
// import { Observable } from "rxjs";

import { epic as EpicWeek } from "../containers/Week";

export default combineEpics(EpicWeek);

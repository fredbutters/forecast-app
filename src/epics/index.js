import { combineEpics } from "redux-observable";
import { loadUsers as EpicUsers } from "../containers/Users";
import { getMoreUsers as EpicGetUsers } from "../containers/Users";
import {
    epic as EpicForecast,
    epicHourly as EpicForecastHourly
} from "../containers/Forecast";
import { getPosts as EpicReddit } from "../containers/Reddit";

export default combineEpics(
    EpicForecast,
    EpicForecastHourly,
    EpicUsers,
    EpicGetUsers,
    EpicReddit
);

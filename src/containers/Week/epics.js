import { Observable } from "rxjs";
import { load, loadEnd } from "./actions";

export const epic = (actions, store) =>
    actions.filter(action => action.type === "LOAD_START").switchMap(() =>
        Observable.ajax({
            url:
                "http://api.wunderground.com/api/6af66ddeedda3e8d/forecast/q/CA/Irvine.json",
            headers: {
                "Content-Type":
                    "application/x-www-form-urlencoded; charset=UTF-8"
            }
        })
            .mergeMap(({ response }) => {
                const success = Observable.of(
                    load({
                        week: response.forecast.simpleforecast.forecastday
                    })
                );
                const end = Observable.of(loadEnd());
                return success.concat(end);
            })
            .catch(() => Observable.of(loadEnd()))
    );

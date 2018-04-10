import { Observable } from "rxjs";
import { load, loadEnd, getHourly, getHourlyEnd } from "./actions";

export const epic = (actions, store) =>
    actions
        .filter(action => action.type === "FORECAST_LOAD_START")
        .switchMap(() =>
            Observable.ajax({
                url: getApi("forecast"),
                crossDomain: true,
                createXHR: function() {
                    return new XMLHttpRequest();
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

export const epicHourly = (actions, store) =>
    actions
        .filter(action => action.type === "FORECAST_HOURLY_START")
        .switchMap(() =>
            Observable.ajax({
                url: getApi("hourly"),
                crossDomain: true,
                createXHR: function() {
                    return new XMLHttpRequest();
                }
            })
                .mergeMap(({ response }) => {
                    const success = Observable.of(
                        getHourly({
                            hourly: response.hourly_forecast.slice(0, 7)
                        })
                    );
                    const end = Observable.of(getHourlyEnd());
                    return success.concat(end);
                })
                .catch(() => Observable.of(getHourlyEnd()))
        );

const getApi = param => {
    return `http://api.wunderground.com/api/6af66ddeedda3e8d/${param}/q/CA/Irvine.json`;
};

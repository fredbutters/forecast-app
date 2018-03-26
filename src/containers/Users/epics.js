import { Observable } from "rxjs";
import { loadStart, load, loadEnd } from "./actions";

export const epic = (actions, store) => {
    return actions
        .filter(action => action.type === "LOAD_START")
        .switchMap(() =>
            Observable.ajax({
                url: "https://randomuser.me/api/?results=5&nat=US"
            })
                .mergeMap(({ response }) => {
                    const success = Observable.of(
                        load({
                            response
                        })
                    );
                    const end = Observable.of(loadEnd());
                    return success.concat(end);
                })
                .catch(err => Observable.of(loadEnd()))
        );
};

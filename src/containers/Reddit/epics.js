import { Observable } from "rxjs";
import { load, loadStart, loadEnd, loadError } from "./actions";

export const getPosts = (actions, store) => {
    return actions
        .filter(action => action.type === "LOAD_START_REDDIT")
        .switchMap(() => {
            // let subreddit = "reactjs";
            let { subRedditText } = store.getState().reddit;

            return Observable.ajax({
                url: `https://www.reddit.com/r/${subRedditText ||
                    "reactjs"}.json`,
                crossDomain: true,
                createXHR: function() {
                    return new XMLHttpRequest();
                }
            })
                .mergeMap(({ response }) => {
                    let data = response.data.children.map(obj => obj.data);
                    const success = Observable.of(load({ data }));
                    const end = Observable.of(loadEnd());
                    return success.concat(end);
                })
                .catch(err => {
                    console.log(err);
                    Observable.of(loadError(err));
                });
        });
};

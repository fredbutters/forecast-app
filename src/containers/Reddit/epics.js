import { Observable } from "rxjs/Observable";
import { load, loadEnd, loadError } from "./actions";

export const getPosts = (actions, store) => {
    return actions
        .filter(action => action.type === "LOAD_START_REDDIT")
        .switchMap(() => {
            // let subreddit = "reactjs";
            let { subRedditText } = store.getState().reddit;

            return Observable.ajax({
                url: `https://www.reddit.com/r/${subRedditText}.json`,
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
                .catch(error => {
                    let msg =
                        error.status === 403 || error.status === 404
                            ? `No subreddit found for: ${subRedditText}`
                            : error.message;
                    return Observable.of(loadError(msg));
                });
        });
};

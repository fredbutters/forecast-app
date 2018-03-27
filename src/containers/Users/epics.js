import { Observable } from "rxjs";
import { load, loadEnd, getUsers, getUsersEnd } from "./actions";

export const loadUsers = (actions, store) => {
    return actions
        .filter(action => action.type === "LOAD_START_USERS")
        .switchMap(() =>
            usersApi(store)
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

export const getMoreUsers = (actions, store) => {
    return actions
        .filter(action => action.type === "GET_USERS_START")
        .switchMap(() =>
            usersApi(store)
                .mergeMap(({ response }) => {
                    const success = Observable.of(
                        getUsers({
                            response
                        })
                    );
                    const end = Observable.of(getUsersEnd());
                    return success.concat(end);
                })
                .catch(err => Observable.of(getUsersEnd()))
        );
};

const usersApi = store => {
    let count = store.getState().users.userCount;
    return Observable.ajax({
        url: `https://randomuser.me/api/?results=${count}&nat=US`
    });
};

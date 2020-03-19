import {CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING} from "../actionTypes";

const handlers = {
    [GET_REPOS]: (state, {payload}) => ({ ...state, repos: payload, loading: false }),
    [SEARCH_USERS]: (state, {payload}) => ({ ...state, users: payload, loading: false }),
    [CLEAR_USERS]: (state, {payload}) => ({...state, users: []}),
    [GET_USER]: (state, {payload}) => ({ ...state, user: payload, loading: false }),
    [SET_LOADING]: state => ({...state, loading: true}),
    DEFAULT: state => state,
};

export default (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
}

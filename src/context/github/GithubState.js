import React, {useReducer} from 'react';
import axios from 'axios'
import githubReducer from "./githubReducer";
import {GithubContext} from "./githubContext";
import {CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING} from "../actionTypes";
import routes from '../../routes';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

const GithubState = ({children}) => {
    const initialState = {
        users: [],
        repos: [],
        user: {},
        loading: false,
    };
    const [state, dispatch] = useReducer(githubReducer, initialState);
    const { users, user, repos, loading } = state;
    const search = async value => {
        setLoading();
        const response = await axios.get(routes.users(), {
            params: {
                q: value,
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
            }
        });
        dispatch({
            type: SEARCH_USERS,
            payload: response.data.items,
        })
    };
    const getRepos = async name => {
        setLoading();
        const response = await axios.get(routes.repos(name), {
            params: {
                per_page: 5,
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
            }
        });
        dispatch({
            type: GET_REPOS,
            payload: response.data,
        })
    };

    const getUser = async name => {
        setLoading();
        const response = await axios.get(routes.user(name), {
            params: {
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
            }
        });
        dispatch({
            type: GET_USER,
            payload: response.data,
        })
    };
    const clearUsers = () => dispatch({ type: CLEAR_USERS });
    const setLoading = () => dispatch({ type: SET_LOADING });
    return (
        <GithubContext.Provider value={{
            search, getUser, getRepos, clearUsers,
            users, user, repos, loading
        }}>
            {children}
        </GithubContext.Provider>
    )
};

export default GithubState;

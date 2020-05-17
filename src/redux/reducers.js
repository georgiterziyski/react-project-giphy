import { combineReducers } from 'redux'
import types from './action-types'

function favourites(state = [], action) {
    switch (action.type) {
        case types.SET_FAVOURITES: {
            return [...action.payload];
        }
        case types.ADD_GIF: {
            const currentGifs = state.slice();
            currentGifs.push(action.payload);
            return [currentGifs];
        }
        case types.DELETE_GIF: {
            return state.filter(item => item._id !== action.payload)
        }
        default:
            return state;
    }
}

function gifs(state = [], action) {
    switch (action.type) {
        case types.SET_GIFS: {
            return [...action.payload];
        }
        default:
            return state;
    }
}

function error(state = {}, action) {
    switch (action.type) {
        case types.SET_ERROR: {
            return {...action.payload};
        }
        default:
            return state;
    }
}

function currentUser(state = {}, action) {
    switch (action.type) {
        case types.SET_USER: {
            return {...action.payload};
        }
        default:
            return state;
    }
}

function token(state = localStorage.getItem('token') ? localStorage.getItem('token') : '', action) {
    switch (action.type) {
        case types.SAVE_TOKEN: {
            localStorage.setItem('token', action.payload);
            return action.payload
        }
        case types.DELETE_TOKEN: {
            localStorage.removeItem('token');
            return action.payload
        }
        default:
            return state;
    }
}

function graphQLErrors(state = [], action) {
    switch (action.type) {
        case types.ADD_GRAPHQL_ERROR: {
            return [...state, action.payload]
        }
        default:
            return state;
    }
}

function userLoaded(state = false, action) {
    switch (action.type) {
        case types.SET_USER_LOADED: {
            return action.payload;
        }
        default:
            return state;
    }
}

export default combineReducers({
    favourites,
    gifs,
    error,
    token,
    userLoaded,
    graphQLErrors,
    currentUser,
});
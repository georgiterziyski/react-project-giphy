import { combineReducers } from 'redux'
import types from './action-types'

function favourites(state = [], action) {
    switch (action.type) {
        case types.SET_FAVOURITES: {
            return [...action.payload];
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

export default combineReducers({
    favourites,
    gifs,
    error,
    currentUser,
});
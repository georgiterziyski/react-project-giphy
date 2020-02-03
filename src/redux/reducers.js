import { combineReducers } from 'redux'
import types from './action-types'

function favourites(state = [], action) {
    switch (action.type) {
        case types.SET_ALL_FAVORITES: {
            return [...state, action.payload];
        }
        case types.GET_ALL_FAVORITES: {
            return [...state, action.payload];
        }
        case types.REMOVE_ALL_FAVORITES: {
            state.splice(action.payload)
            return [...state];
        }
        default:
            return state;
    }
}

function favourite(state = [], action) {
    switch (action.type) {
        case types.ADD_FAVORITE: {
            return [...state, action.payload];
        }
        case types.REMOVE_FAVORITE: {
            state.splice(action.payload, 1)
            return [...state];
        }
        default:
            return state;
    }
}

function user(state = [], action) {
    switch (action.type) {
        case types.REGISTER_USER: {
            return [...state, action.payload];
        }
        case types.DELETE_USER: {
            state.splice(action.payload, 1)
            return [...state];
        }
        case types.UPDATE_USER: {
            return [...state, action.payload];
        }
        case types.GET_CURRENT_USER: {
            return {...action.payload};
        }
        case types.LOGIN: {
            return [...state, action.payload];
        }
        case types.LOGOUT: {
            return {...action.payload};
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

function search(state = [], action) {
    switch (action.type) {
        case types.SEARCH: {
            return [...state, action.payload];
        }
        default:
            return state;
    }
}

export default combineReducers({
    favourites, 
    favourite, 
    user, 
    error,
    search
});
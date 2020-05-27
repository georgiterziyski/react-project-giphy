import types from './action-types';
import networkClient from '../network/network-client';
import graphQLService from "../network/graphql/graphql-service";

export function setError (error) {
    return { type: types.SET_ERROR, payload: error };
}

export function setGifs (gif) {
    return {type: types.SET_GIFS, payload: gif}
}

export const getGifs = () => async dispatch => {
    try{
        const res = await networkClient.get("trending");
        dispatch(setGifs(res.data));
    } catch (ex){
        dispatch(setError({message: 'There was an error!'}))
    }
};

export const searchGifs = search => async dispatch => {
    try{
        const res = await networkClient.get(`search?q=${search}`);
        dispatch(setGifs(res.data));
    } catch (ex){
        dispatch(setError({message: 'There was an error!'}))
    }
}

export function setFavourites (gifs) {
    return {type: types.SET_FAVOURITES, payload: gifs}
}

export const getFavourites = () => async dispatch => {
    try{
        const response = await graphQLService.currentUser();
        dispatch(setFavourites(response.data.currentUser.gifs));
    } catch (ex){
        dispatch(setError({message: 'There was an error!'}))
    }
};

export function addGif (gif) {
    return {type: types.ADD_GIF, payload: gif}
}

export const addGifToUser = (variables, responseFields = "_id") => async dispatch => {
    try {
        const response = await graphQLService.editUser(variables, responseFields);
        dispatch(saveCurrentUser(response.data.editUser));
        //dispatch(addGif(response.data.addGif));
    } catch(ex) {
        dispatch(setError({message: 'There was an error!'}))
    }
};

export function deleteGifFromUser (gif) {
    return {type: types.DELETE_GIF, payload: gif}
}

export const deleteGif = (variables, responseFields = "_id") => async dispatch => {
    try {
        const response = await graphQLService.deleteGif(variables, responseFields);
        dispatch(deleteGifFromUser(response.data.deleteGif._id));
    } catch(ex) {
        dispatch(setError({message: 'There was an error!'}))
    }
};

////////////////////////////////////////////////

export const addUser = variables => async dispatch => {
    try {
        const response = await graphQLService.addUser(variables);
        dispatch(getCurrentUser());
        dispatch(saveToken(response.data.addUser));
    } catch(e){
        e.graphQLErrors.forEach(error => {
            console.log(error)
        })
        dispatch(setGraphQLError({request: "addUser", errors: []}))
    }
}

export const login = variables => async dispatch => {
    try {
        const response = await graphQLService.login(variables);
        dispatch(saveToken(response.data.login));
        dispatch(getCurrentUser());
    } catch(e){
        e.graphQLErrors.forEach(error => {
        console.log(error)
        })
        dispatch(setGraphQLError({request: "login", errors: []}))
    }
}

export const editUser = (variables, responseFields = "_id username email userType, gifs") => async dispatch => {
    try {
        graphQLService.editUser(variables, responseFields);
        dispatch(getCurrentUser());
    } catch(e){
        console.log(e);
        dispatch(setGraphQLError({request: "editUser", errors: []}))
    }
}

export const logout = () => async dispatch => {
    dispatch(deleteToken());
    dispatch(saveCurrentUser(null));
}

export const getCurrentUser = () => async dispatch => {
    try {
        const response = await graphQLService.currentUser();
        dispatch(saveCurrentUser(response.data.currentUser));
        dispatch(setUserLoaded())
    } catch(e){
        dispatch(saveToken(''));
        dispatch(setUserLoaded())
    }
}

export function saveCurrentUser(user){
    return {type: types.SET_USER, payload: user}
}

export function saveToken(token){
    return {type: types.SAVE_TOKEN, payload: token}
}

export function deleteToken(){
    return {type: types.DELETE_TOKEN, payload: true}
}

export function setUserLoaded(){
    return {type: types.SET_USER_LOADED, payload: true}
}

export function setGraphQLError (error) {
    return { type: types.ADD_GRAPHQL_ERROR, payload: error };
}

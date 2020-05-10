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

export const getFavourites = (responseFields = "_id") => async dispatch => {
    try{
        const response = await graphQLService.getGifs(responseFields);
        dispatch(setFavourites(response.data.gifs));
    } catch (ex){
        dispatch(setError({message: 'There was an error!'}))
    }
};

export function addGif (game) {
    return {type: types.ADD_GIF, payload: game}
}

export const addGifToUser = (variables, responseFields = "_id") => async dispatch => {
    try {
        const response = await graphQLService.addGif(variables, responseFields);
        //dispatch(saveCurrentUser(response.data.editUser));
        dispatch(addGif(response.data.addGif));
    } catch(ex) {
        dispatch(setError({message: 'There was an error!'}))
    }
};

export function saveCurrentUser(user){
    return {type: types.SET_USER, payload: user}
}
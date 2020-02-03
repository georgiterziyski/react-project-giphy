import types from './action-types';
import networkClient from '../network/network-client';

export function setError (error) {
    return { type: types.SET_ERROR, payload: error };
}

export function addFavorite(favourite){
    return {type: types.ADD_FAVORITE, payload: favourite};
}

export function removeFavorite(index){
    return {type: types.REMOVE_FAVORITE, payload: index};
}

export function search (movies) {
    return {type: types.SEARCH, payload: movies}
}

export const getgifs = params => async dispatch => {
    try{
        const response = await networkClient.get(params);
        dispatch(search(response.results));
    } catch (ex){
        dispatch(setError({message: 'There was an error!'}))
    }
};
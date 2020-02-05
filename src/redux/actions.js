import types from './action-types';
import networkClient from '../network/network-client';

export function setError (error) {
    return { type: types.SET_ERROR, payload: error };
}

export function setGifs (data) {
    return {type: types.SET_GIFS, payload: data}
}

export const getGifs = () => async dispatch => {
    try{
        const res = await networkClient.get("trending");
        dispatch(setGifs(res.data));
    } catch (ex){
        dispatch(setError({message: 'There was an error!'}))
    }
};
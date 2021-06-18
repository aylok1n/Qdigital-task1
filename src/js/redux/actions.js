import { CHANGE_SOURCE, LOAD_REMOTE, NEXT_IMG, PREV_IMG } from "./ActionTypes"
import {api,remoteImg} from '../api'

export const nextImg = () => {
    return {
        type: NEXT_IMG,
    }
}
export const prevImg = () => {
    return {
        type: PREV_IMG,
    }
}
export const changeSource = () => {
    return {
        type: CHANGE_SOURCE,
    }
}
export function loadRemote() {

    return async dispatch => {
        const response = await fetch('https://imagesapi.osora.ru/');
        let json = await response.json();
        dispatch({ type: LOAD_REMOTE, payload: json})
    }
}
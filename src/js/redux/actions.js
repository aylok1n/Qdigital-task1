import { CHANGE_SOURCE, SET_REMOTE, NEXT_IMG, PREV_IMG } from "./actionTypes"

export const nextImg = (nextImgId) => {
    return {
        type: NEXT_IMG,
        payload: nextImgId,
    }
}

export const prevImg = (prevImgId) => {
    return {
        type: PREV_IMG,
        payload: prevImgId,
    }
}

export const changeSource = (source) => {
    return {
        type: CHANGE_SOURCE,
        payload: source,
    }
}

export const setRemote = (json) => {
    return { 
        type: SET_REMOTE, 
        payload: json,
    }
}
import { CHANGE_SOURCE, LOAD_REMOTE, NEXT_IMG, PREV_IMG } from "./actionTypes"

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
export const loadRemote = (json) => {
    return { 
        type: LOAD_REMOTE, 
        payload: json,
    }
}
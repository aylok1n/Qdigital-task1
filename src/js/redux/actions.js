import {
    CHANGE_SOURCE,
    SET_REMOTE,
    NEXT_IMG,
    PREV_IMG
} from "./actionTypes"

const nextImg = (nextImgId) => {
    return {
        type: NEXT_IMG,
        payload: nextImgId,
    }
}

const prevImg = (prevImgId) => {
    return {
        type: PREV_IMG,
        payload: prevImgId,
    }
}

const changeSource = (source) => {
    return {
        type: CHANGE_SOURCE,
        payload: source,
    }
}
const setRemote = (json) => {
    return {
        type: SET_REMOTE,
        payload: json,
    }
}

export const actions = {
    nextImg,
    prevImg,
    changeSource,
    setRemote
}
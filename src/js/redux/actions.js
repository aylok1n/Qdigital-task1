import { CHANGE_SOURCE, LOAD_REMOTE, NEXT_IMG, PREV_IMG } from "./ActionTypes"

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
export const loadRemote = (remoteImg) => {
    return {
        type: LOAD_REMOTE,
        payload: remoteImg
    }
}
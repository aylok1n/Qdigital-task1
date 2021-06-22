import {
    CHANGE_SOURCE,
    SET_REMOTE,
    NEXT_IMG,
    PREV_IMG,
    NEXT_AUDIO,
    PREV_AUDIO,
    PLAY_PAUSE
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

const playPause = (status) => {
    return {
        type: PLAY_PAUSE,
        payload: status,
    }
}
const nextAudio = (nextAudioId) => {
    return {
        type: NEXT_AUDIO,
        payload: nextAudioId,
    }
}
const prevAudio = (prevAudioId) => {
    return {
        type: PREV_AUDIO,
        payload: prevAudioId,
    }
}
export const actions = {
    nextImg,
    prevImg,
    changeSource,
    setRemote,
    playPause,
    nextAudio,
    prevAudio
}
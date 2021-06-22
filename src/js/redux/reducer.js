import {
    initialState
} from "./initialState"
import {
    CHANGE_SOURCE,
    NEXT_IMG,
    PREV_IMG,
    SET_REMOTE
} from "./actionTypes"

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case NEXT_IMG:
            return {
                ...state, imgId: action.payload
            }
        case PREV_IMG:
            return {
                ...state, imgId: action.payload
            }
        case CHANGE_SOURCE:
            return {
                ...state, source: action.payload
            }
        case SET_REMOTE:
            return {
                ...state, remote: action.payload
            }

        default:
            return state
    }

}
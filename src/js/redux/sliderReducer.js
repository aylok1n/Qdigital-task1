import { initialState } from "./initialState"
import { CHANGE_SOURCE, NEXT_IMG, PREV_IMG, LOAD_REMOTE } from "./ActionTypes"

export const sliderReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEXT_IMG:
            if(state.imgId !== 2){
                return {...state, imgId: state.imgId + 1}
            } else return {...state, imgId: 0}
        break
        case PREV_IMG:
            if(state.imgId !== 0){
                return {...state, imgId: state.imgId - 1}
            } else return {...state, imgId: 2}
        break;
        case CHANGE_SOURCE:
            if(state.source !== 'local'){
                return {...state, source: 'local'}
            } else return {...state, source: 'remote'}
        break;
        case LOAD_REMOTE:
            if(state.remote == []){
                return {...state, remote: action.payload}
            }
        break;
        default: return state
    }
    
} 
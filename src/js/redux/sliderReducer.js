import { initialState } from "./initialState"
import { CHANGE_SOURCE, NEXT_IMG, PREV_IMG, LOAD_REMOTE } from "./ActionTypes"

export const sliderReducer = (state = initialState, action) => {
    let length = 0
    if (state.source == 'local'){
        length = state.local.length
    } else length = state.remote.length
    console.log(length)
    switch (action.type) {
        case NEXT_IMG:
            if(state.imgId !== length - 1 ){
                return {...state, imgId: state.imgId + 1}
            } else return {...state, imgId: 0}
        case PREV_IMG:
            if(state.imgId !== 0){
                return {...state, imgId: state.imgId - 1}
            } else return {...state, imgId: 2}
        case CHANGE_SOURCE:
            if(state.source !== 'local'){
                return {...state, source: 'local'}
            } else return {...state, source: 'remote'}
        case LOAD_REMOTE:     
                return {...state, remote: action.payload}
        default: return state
    }
    
} 
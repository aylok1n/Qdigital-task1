import { combineReducers } from "redux";
import { sliderReducer } from "./sliderReducer";

export const rootReducer = combineReducers({
    slider: sliderReducer
})
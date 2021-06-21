import { combineReducers } from "redux";
import { sliderReducer } from "./reducers";

export const rootReducer = combineReducers({
    slider: sliderReducer
})
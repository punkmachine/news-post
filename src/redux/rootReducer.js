import { combineReducers } from "redux";
import { likesReducer } from "./reducers/likesReducer";
import { inputReducer } from "./reducers/inputReducer";
import { commentsReducer } from "./reducers/commentsReducer";

export const rootReducer = combineReducers({
	likesReducer,
	inputReducer,
	commentsReducer
});
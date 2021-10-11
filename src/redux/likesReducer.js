import { INCR, DECR } from "./types";

const initialState = {
	likes: 0
}

export const likesReducer = (state = initialState, action) => {
	switch(action.type) {
		case INCR: 
			return {
				...state,
				likes: state.likes + 1
			}
		
		case DECR: 
			return {
				...state,
				likes: state.likes - 1
			}
		
		default:
			return state;
	}
}
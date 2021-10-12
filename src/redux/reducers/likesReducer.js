import { INCR, DECR } from "../types";

//начальное значение
const initialState = {
	likes: 0
}

//управление состоянием
export const likesReducer = (state = initialState, action) => {
	switch(action.type) {
		//если нажата кнопка лайков, он возвращает весь стейт по принципу иммутабельности, изменяя при этом количество лайков
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
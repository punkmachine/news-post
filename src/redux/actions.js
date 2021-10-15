import {
	DECR, 
	INCR, 
	INPUT_TEXT, 
	COMMENT_CREATE, 
	COMMENT_UPD, 
	COMMENT_DEL,
	COMMENTS_LOAD,
	LOADER_DISPLAY_ON,
	LOADER_DISPLAY_OFF
} from "./types";

//создание функции, которая будет возвращать тип для Reducer
export function incrementLikes() {
	return {
		type: INCR
	}
}

export function decrementLikes() {
	return {
		type: DECR
	}
}

export function inputText(text) {
	return {
		type: INPUT_TEXT,
		text
	}
}

export function commentCreate(id, text) {
	return {
		type: COMMENT_CREATE,
		data: {id, text}
	}
}

export function commentUpd(id, text) {
	return {
		type: COMMENT_UPD,
		data: {id, text}
	}
}

export function commentDel(id) {
	return {
		type: COMMENT_DEL,
		id
	}
}

export function commentsLoad() {
	return async dispatch =>{
		dispatch(loaderOn());
		const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10');
		const jsonData = await response.json();
		dispatch({
			type: COMMENTS_LOAD,
			data: jsonData
		});
		dispatch(loaderOff());
	}
}

export function loaderOn() {
	return {
		type: LOADER_DISPLAY_ON
	}
}

export function loaderOff() {
	return {
		type: LOADER_DISPLAY_OFF
	}
}
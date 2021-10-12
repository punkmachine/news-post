import {
	DECR, 
	INCR, 
	INPUT_TEXT, 
	COMMENT_CREATE, 
	COMMENT_UPD, 
	COMMENT_DEL 
} from "./types";

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
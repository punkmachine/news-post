import { DECR, INCR, INPUT_TEXT } from "./types";

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
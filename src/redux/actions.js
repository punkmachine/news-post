import { DECR, INCR } from "./types";

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
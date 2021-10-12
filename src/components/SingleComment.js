import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { commentUpd, commentDel } from "../redux/actions";

function SingleComment({data}) {
	const {id, text} = data;
	const [commentText, setCommentText] = useState('');
	const dispatch = useDispatch();

	function handleInput(event) {
		setCommentText(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		dispatch(commentUpd(id, commentText));
	}

	function handleDelete(event) {
		event.preventDefault();
		dispatch(commentDel(id));
	}

	useEffect(() => {
		if (text) {
			setCommentText(text);
		}
	}, [text]);

	return (
		<form className="comments-item" onSubmit={handleSubmit} >
			<div className="comments-item-delete" onClick={handleDelete} >&times;</div>
			<input type="text" value={commentText} onChange={handleInput} />
			<input type="submit" hidden />
		</form>
	);
}

export default SingleComment;
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import uniqid from 'uniqid';
import SingleComment from "./SingleComment";
import { commentCreate, commentsLoad } from "../redux/actions";


function Comments(props) {
	const [textComment, setTextComment] = useState('');
	const dispatch = useDispatch();
	const comments = useSelector(state => {
		return state.commentsReducer.comments;
	});

	function handleInput(event) {
		setTextComment(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault()
		const id = uniqid();
		dispatch(commentCreate(id, textComment));
	}

	useEffect(() => {
		dispatch(commentsLoad());
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	
	return (
		<div className="card-comments">
			<form className="comments-item-create" onSubmit={handleSubmit} >
				<input type="text" value={textComment} onChange={handleInput} />
				<input type="submit" hidden />
			</form>
			{!!comments.length && comments.map(res => {
				return <SingleComment key={res.id} data={res} />
			})}
		</div>
	);
}

export default Comments;
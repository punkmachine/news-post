import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import uniqid from 'uniqid';
import SingleComment from "./SingleComment";
import { commentCreate, commentsLoad, loadMoreComments } from "../redux/actions";


function Comments(props) {
	const [textComment, setTextComment] = useState('');
	const [countComments, setCountComments] = useState(20);
	const dispatch = useDispatch();
	const comments = useSelector(state => state.commentsReducer.comments);

	function handleInput(event) {
		setTextComment(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();

		const id = uniqid();
		dispatch(commentCreate(id, textComment));
		
		event.target.reset();
	}

	function handleShowMore() {
		setCountComments((prev) => prev + 10);
		dispatch(loadMoreComments(countComments));
	}

	useEffect(() => {
		dispatch(commentsLoad());
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	
	return (
		<div className="card-comments">
			<form className="comments-item-create" onSubmit={handleSubmit} >
				<span>Добавить комментарий: </span>
				<input type="text" onChange={handleInput} title='Введите ваш комментарий' />
				<input type="submit" hidden />
			</form>
			{!!comments.length && comments.map(res => {
				return <SingleComment key={res.id} data={res} />
			})}
			<button onClick={handleShowMore}>Показать еще...</button>
		</div>
	);
}

export default Comments;
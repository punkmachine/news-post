// import { connect } from 'react-redux';
import { useDispatch, useSelector } from "react-redux";
import { incrementLikes, decrementLikes } from './redux/actions';

function Likes(props) {
	const dispatch = useDispatch();
	const countLikes = useSelector(state => {
		return state.likesReducer.likes;
	});

	function handleLikes() {
		dispatch(incrementLikes());
	}

	function handleDislikes() {
		dispatch(decrementLikes());
	}

	return (
		<div className="button-controls">
			<button onClick={handleLikes}>❤ {countLikes}</button>
			<button onClick={handleDislikes}>Dislike</button>
		</div>
	);
}

export default Likes;
import { useDispatch, useSelector } from "react-redux";
import { incrementLikes, decrementLikes } from './redux/actions';

function Likes(props) {
	//создаем диспатч
	const dispatch = useDispatch();
	//выводим из redux состояния количество лайков
	const countLikes = useSelector(state => {
		return state.likesReducer.likes;
	});

	function handleLikes() {
		//передача функции, которая несет в себе type для обновления состояния
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
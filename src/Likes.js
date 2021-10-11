import { connect } from 'react-redux';

function Likes(props) {
	console.log('render - ', props);

	return (
		<div className="button-controls">
			<button onClick={props.onIncrementLikes}>❤ {props.likes}</button>
			<button onClick={props.onDecrementLikes}>Dislike</button>
		</div>
	);
}

function mapStateToProps(state) {
	console.log('mapStateToProps -', state);
	const { likesReducer } = state;
	return {
		likes: likesReducer.likes,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onIncrementLikes: () => {
			const action = {
				type: 'INCR'
			}
			dispatch(action);
		},
		onDecrementLikes: () => {
			const action = {
				type: 'DECR'
			}
			dispatch(action);
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
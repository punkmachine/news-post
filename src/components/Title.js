import { useDispatch, useSelector } from "react-redux";
import { inputText } from "../redux/actions";

function Title() {
	const text = useSelector(state => state.inputReducer.text);
	const dispatch = useDispatch();

	function handleChange(event) {
		dispatch(inputText(event.target.value));
	}

	return (
		<div className="card-title">
			<div className="card-title-top">
				<input type="text" onChange={handleChange} />
			</div>
			<p>{text}</p>
		</div>
	)
}

export default Title;
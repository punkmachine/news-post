import Loader from "react-loader-spinner";
import { useSelector } from "react-redux";

function Spin(props) {
	const spinner = useSelector(state => {
		return state.appReducer.loading;
	});

	console.log('spinner >>', spinner);

	return (
		<div className="loader-styles">
			<Loader 
				type="TailSpin"
				color="#00BFFF"
				height={100}
				width={100}
				visible={spinner}
			/>
		</div>
	);
}

export default Spin;
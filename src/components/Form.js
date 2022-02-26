import compSelector from "../util/compSelector";
import "./form.css";

const Form = ({ data, onSubmit }) => {
	let i = 0;
	return (
		<form onSubmit={onSubmit}>
			{data.map((item) => {
				i++;
				return (
					<div
						key={i}
						className={`${
							item.flex ? "form-item-wrapper-halved" : "form-item-wrapper"
						}`}
					>
						{compSelector(item)}
					</div>
				);
			})}
		</form>
	);
};

export default Form;

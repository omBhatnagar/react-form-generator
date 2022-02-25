import compSelector from "../util/compSelector";
import "./form.css";

const Form = () => {
	const data = [
		{
			type: "text",
			name: "text",
			value: "test value",
			id: "",
			class: "input",
			flex: true,
		},
		{
			type: "email",
			name: "email",
			value: "test mail value",
			id: "",
			class: "input",
			flex: true,
		},
		{
			type: "radio",
			name: "radio1",
			id: "radio1",
			value: "male",
			title: "Male",
		},
		{
			type: "radio",
			name: "radio1",
			id: "radio2",
			value: "female",
			title: "Female",
		},
		{
			type: "select",
			name: "select1",
			id: "",
			options: [
				{ value: "v1", title: "value 1" },
				{ value: "v2", title: "value 2" },
			],
		},
		{
			type: "button",
			value: "btn",
			title: "Click Me",
			btnType: "submit",
			id: "",
			onClick: () => console.log("btn clicked! :)"),
		},
	];
	return (
		<div>
			{data.map((item) => (
				<div
					className={`${
						item.flex ? "form-item-wrapper-halved" : "form-item-wrapper"
					}`}
				>
					{compSelector(item)}
				</div>
			))}
		</div>
	);
};

export default Form;

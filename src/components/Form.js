import { useState } from "react";
import compSelector from "../util/compSelector";
import "./form.css";

const Form = () => {
	const data = [
		{
			type: "text",
			name: "text",
			// value: "test value",
			onChange: valueHandler,
			id: "",
			class: "input",
			flex: true,
		},
		{
			type: "email",
			name: "email",
			// value: "test mail value",
			onChange: valueHandler,
			id: "",
			class: "input",
			flex: true,
		},
		{
			type: "password",
			name: "password",
			onChange: valueHandler,
			class: "input",
		},
		{
			type: "radio",
			name: "radio1",
			id: "radio1",
			value: "male",
			onChange: valueHandler,
			title: "Male",
		},
		{
			type: "radio",
			name: "radio1",
			id: "radio2",
			value: "female",
			onChange: valueHandler,
			title: "Female",
		},
		{
			type: "select",
			name: "select1",
			onChange: valueHandler,
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
			onClick: () => console.log(formData),
		},
	];

	// Initializing state
	const [formData, setFormData] = useState([{}]);

	// Function to handle state for input values
	function valueHandler(e) {
		let flag = true;
		let clonedData = formData.filter(
			(formItem) => Object.keys(formItem).length !== 0
		);

		for (const clonedItem of clonedData) {
			if (clonedItem.name === e.target.name) {
				flag = false;
				clonedItem.value = e.target.value;
				break;
			} else {
				flag = true;
			}
		}
		if (flag) {
			clonedData.push({ name: e.target.name, value: e.target.value });
			flag = false;
		}
		setFormData(clonedData);
	}

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

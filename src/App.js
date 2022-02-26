import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
	const data = [
		{
			type: "text",
			name: "text",
			onChange: valueHandler,
			id: "",
			class: "input",
			flex: true,
		},
		{
			type: "email",
			name: "email",
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
			type: "textarea",
			name: "textarea",
			onChange: valueHandler,
			class: "input",
			flex: true,
		},
		{
			type: "textarea",
			name: "textarea1",
			onChange: valueHandler,
			class: "input",
			flex: true,
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
			onClick: () => console.log("hello ji :)"),
		},
	];

	// Initializing state
	const [formData, setFormData] = useState([{}]);

	// Function to handle state for input values
	function valueHandler(e) {
		let flag = true;

		// Remove initial empty object from state
		let clonedData = formData.filter(
			(formItem) => Object.keys(formItem).length !== 0
		);

		// Update the values
		for (const clonedItem of clonedData) {
			if (clonedItem.name === e.target.name) {
				flag = false;
				clonedItem.value = e.target.value;
				break;
			}
		}
		if (flag) {
			clonedData.push({ name: e.target.name, value: e.target.value });
			flag = false;
		}
		setFormData(clonedData);
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
	};
	return (
		<div className="App">
			<h1>Form Generator</h1>
			<div className="form-wrapper">
				<Form data={data} onSubmit={handleSubmit} />
			</div>
		</div>
	);
}

export default App;

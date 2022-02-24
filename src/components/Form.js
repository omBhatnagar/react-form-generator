import compSelector from "../util/compSelector";

const Form = () => {
	const data = [
		{ type: "text", name: "text", value: "test value", id: "" },
		{ type: "email", name: "email", value: "test mail value", id: "" },
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
				<div>{compSelector(item)}</div>
			))}
		</div>
	);
};

export default Form;

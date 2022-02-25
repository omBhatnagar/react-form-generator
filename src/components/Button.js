const Button = ({ item }) => {
	return (
		<button
			type={item.btnType}
			value={item.value}
			onClick={item.onClick}
			id={item.id}
			class={item.class}
		>
			{item.title}
		</button>
	);
};

export default Button;

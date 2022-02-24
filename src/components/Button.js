const Button = ({ item }) => {
	return (
		<button
			type={item.btnType}
			value={item.value}
			onClick={item.onClick}
			id={item.id}
		>
			{item.title}
		</button>
	);
};

export default Button;

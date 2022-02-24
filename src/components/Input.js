const Input = ({ item }) => {
	return (
		<div>
			{item.type === "text" ? (
				<input
					type="text"
					onClick={item.onClick}
					name={item.name}
					value={item.value}
					id={item.id}
				/>
			) : item.type === "email" ? (
				<input
					type="email"
					onClick={item.onClick}
					name={item.name}
					value={item.value}
					id={item.id}
				/>
			) : (
				<input
					type="password"
					onClick={item.onClick}
					name={item.name}
					value={item.value}
					id={item.id}
				/>
			)}
		</div>
	);
};

export default Input;

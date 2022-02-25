const Input = ({ item }) => {
	return (
		<div className="form-item">
			{item.type === "text" ? (
				<input
					type="text"
					onClick={item.onClick}
					name={item.name}
					value={item.value}
					id={item.id}
					class={item.class}
				/>
			) : item.type === "email" ? (
				<input
					type="email"
					onClick={item.onClick}
					name={item.name}
					value={item.value}
					id={item.id}
					class={item.class}
				/>
			) : (
				<input
					type="password"
					onClick={item.onClick}
					name={item.name}
					value={item.value}
					id={item.id}
					class={item.class}
				/>
			)}
		</div>
	);
};

export default Input;

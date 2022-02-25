const Input = ({ item }) => {
	return (
		<div className="form-item">
			{item.type === "text" ? (
				<input
					type="text"
					onChange={item.onChange}
					name={item.name}
					value={item.value}
					id={item.id}
					class={item.class}
				/>
			) : item.type === "email" ? (
				<input
					type="email"
					onChange={item.onChange}
					name={item.name}
					value={item.value}
					id={item.id}
					class={item.class}
				/>
			) : (
				<input
					type="password"
					onChange={item.onChange}
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

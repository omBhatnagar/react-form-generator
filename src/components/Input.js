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
					className={item.class}
				/>
			) : item.type === "email" ? (
				<input
					type="email"
					onChange={item.onChange}
					name={item.name}
					value={item.value}
					id={item.id}
					className={item.class}
				/>
			) : (
				<input
					type="password"
					onChange={item.onChange}
					name={item.name}
					value={item.value}
					id={item.id}
					className={item.class}
				/>
			)}
		</div>
	);
};

export default Input;

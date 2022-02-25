const Radio = ({ item }) => {
	return (
		<div>
			<input
				type="radio"
				id={item.id}
				value={item.value}
				name={item.name}
				class={item.class}
			/>
			<label htmlFor={item.id}>{item.title}</label>
		</div>
	);
};

export default Radio;

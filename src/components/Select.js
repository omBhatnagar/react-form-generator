const Select = ({ item }) => {
	return (
		<div>
			<select name={item.name} id="item.id" onChange={item.onChange}>
				<option>Select</option>
				{item.options.map((option) => {
					return (
						<option key={option.value} value={option.value}>
							{option.title}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default Select;

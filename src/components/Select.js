const Select = ({ item }) => {
	return (
		<div>
			<select name="item.name" id="item.id">
				{item.options.map((option) => {
					return <option value={option.value}>{option.title}</option>;
				})}
			</select>
		</div>
	);
};

export default Select;

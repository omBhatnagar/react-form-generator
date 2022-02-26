const Textarea = ({ item }) => {
	return (
		<textarea
			name={item.name}
			onChange={item.onChange}
			id={item.id}
			className={item.class}
		/>
	);
};

export default Textarea;

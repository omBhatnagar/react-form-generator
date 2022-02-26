import Button from "../components/Button";
import Input from "../components/Input";
import Select from "../components/Select";
import Radio from "../components/Radio";
import Textarea from "../components/Textarea";

const compSelector = (item) => {
	switch (item.type) {
		case "text":
		case "email":
		case "password":
			return <Input item={item} />;
		case "button":
			return <Button item={item} />;
		case "select":
			return <Select item={item} />;
		case "radio":
			return <Radio item={item} />;
		case "textarea":
			return <Textarea item={item} />;
		default:
			return;
	}
};

export default compSelector;

import { FieldHook } from "payload/dist/fields/config/types";

const formatSlug: FieldHook = ({ value }) => {
	if (value === "" || value === undefined) return "";
	else
		return value
			.replace(/ /g, "-")
			.replace(/[^\w-](\/)+/g, "")
			.toLowerCase();
};

export default formatSlug;

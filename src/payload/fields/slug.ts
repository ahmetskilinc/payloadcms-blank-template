import type { Field } from "payload/types";
import formatSlug from "../utilities/formatSlug";

const Slug: Field = {
	name: "slug",
	label: "Slug",
	type: "text",
	admin: {
		position: "sidebar",
		description: "The slug for the page. (https://your.domain/SLUG)",
	},
	hooks: {
		beforeValidate: [formatSlug],
	},
};

export default Slug;

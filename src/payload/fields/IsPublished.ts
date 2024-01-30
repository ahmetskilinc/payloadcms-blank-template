import type { Field } from "payload/types";

const IsPublished: Field = {
	name: "published",
	type: "checkbox",
	label: "Published Live?",
	admin: {
		position: "sidebar",
		description: "Toggle on to publish the page live.",
	},
};

export default IsPublished;

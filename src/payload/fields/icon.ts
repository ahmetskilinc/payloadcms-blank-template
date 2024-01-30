import type { Field } from "payload/types";

const Icon: Field = {
	type: "select",
	label: "Icon",
	name: "icon",
	admin: {
		position: "sidebar",
		description: "To see the icons; check heroicons.com",
	},
	options: [
		{ value: "codebracket", label: "Code Bracket" },
		{ value: "magnifyingglass", label: "Magnifying Glass" },
		{ value: "shoppingbag", label: "Shopping Bag" },
		{ value: "atsymbol", label: "@ Symbol" },
		{ value: "megaphone", label: "Megaphone" },
		{ value: "newspaper", label: "Newspaper" },
		{ value: "flag", label: "Flag" },
		{ value: "shieldexclamation", label: "Shield Exclamation" },
		{ value: "identification", label: "Identification Card" },
	],
};

export default Icon;

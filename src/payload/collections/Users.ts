import { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
	slug: "users",
	labels: {
		singular: "User",
		plural: "Users",
	},
	auth: true,
	admin: {
		useAsTitle: "firstname",
	},
	access: {},
	fields: [
		{
			type: "row",
			fields: [
				{
					name: "firstname",
					type: "text",
					label: "First Name",
					required: true,
				},
				{
					name: "lastname",
					type: "text",
					label: "Last Name",
					required: true,
				},
			],
		},
	],
};

export default Users;

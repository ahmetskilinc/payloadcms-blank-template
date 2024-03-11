import { CollectionConfig } from "payload/types";
import isPublished from "../fields/IsPublished";
import slug from "../fields/slug";
import lexicalEditor from "../fields/lexicalEditor";
import { populateFullTitle } from "../utilities/populateFullTitle";

const Pages: CollectionConfig = {
	slug: "pages",
	labels: {
		singular: "Page",
		plural: "Pages",
	},
	access: {
		read: () => true,
	},
	admin: {
		useAsTitle: "title",
	},
	versions: {
		drafts: {
			autosave: false,
		},
	},
	timestamps: true,
	fields: [
		{
			type: "tabs",
			tabs: [
				{
					name: "page",
					fields: [
						{
							type: "row",
							fields: [slug],
						},
						isPublished,
					],
				},
				{
					name: "content",
					fields: [
						{
							name: "layout",
							admin: {},
							type: "richText",
							editor: lexicalEditor,
						},
					],
				},
			],
		},
		{
			name: "title",
			type: "text",
			admin: {
				components: {
					Field: () => null,
				},
			},
			hooks: {
				beforeValidate: [populateFullTitle],
			},
		},
	],
};

export default Pages;

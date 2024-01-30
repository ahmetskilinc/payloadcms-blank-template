import { BlocksFeature, LinkFeature, UploadFeature, lexicalEditor } from "@payloadcms/richtext-lexical";

export default lexicalEditor({
	features: ({ defaultFeatures }) => [
		...defaultFeatures,
		LinkFeature({
			fields: [
				{
					name: "rel",
					label: "Rel Attribute",
					type: "select",
					hasMany: true,
					options: ["noopener", "noreferrer", "nofollow"],
					admin: {
						description:
							"The rel attribute defines the relationship between a linked resource and the current document. This is a custom link field.",
					},
				},
			],
		}),
		UploadFeature({
			collections: {
				uploads: {
					fields: [
						{
							name: "caption",
							type: "richText",
							editor: lexicalEditor({}),
						},
					],
				},
			},
		}),
		BlocksFeature({
			blocks: [],
		}),
	],
});

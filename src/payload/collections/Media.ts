import { CollectionConfig } from "payload/types";
const Media: CollectionConfig = {
	slug: "media",
	fields: [
		{
			name: "alt",
			type: "text",
			required: true,
		},
	],
	access: {},
	upload: {
		disableLocalStorage: false,
		staticURL: "/media",
		staticDir: "media",
		imageSizes: [
			{
				name: "thumbnail",
				width: 400,
				position: "centre",
			},
			{
				name: "card",
				width: 768,
				position: "centre",
			},
			{
				name: "desktop",
				width: 1440,
				position: "centre",
			},
		],
		adminThumbnail: "thumbnail",
		mimeTypes: ["image/*", "video/*"],
	},
};

export default Media;

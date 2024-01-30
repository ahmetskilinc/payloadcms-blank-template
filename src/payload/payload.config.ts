import { webpackBundler } from "@payloadcms/bundler-webpack";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { payloadCloud } from "@payloadcms/plugin-cloud";
import seo from "@payloadcms/plugin-seo";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import dotenv from "dotenv";
import path from "path";
import { buildConfig } from "payload/config";
import Media from "./collections/Media";
import Pages from "./collections/Pages";
import Users from "./collections/Users";

dotenv.config({
	path: path.resolve(__dirname, "../../.env"),
});

export default buildConfig({
	admin: {
		user: Users.slug,
		bundler: webpackBundler(),
		webpack: (config) => ({
			...config,
			resolve: {
				...config.resolve,
				alias: {
					...config.resolve.alias,
					dotenv: path.resolve(__dirname, "./dotenv.js"),
				},
			},
		}),
	},
	defaultDepth: 30,
	editor: lexicalEditor({}),
	db: mongooseAdapter({
		url: process.env.DATABASE_URI,
	}),
	serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
	collections: [Users, Pages, Media],
	globals: [],
	typescript: {
		outputFile: path.resolve(__dirname, "payload-types.ts"),
	},
	cors: [process.env.PAYLOAD_PUBLIC_SERVER_URL || ""].filter(Boolean),
	csrf: [process.env.PAYLOAD_PUBLIC_SERVER_URL || ""].filter(Boolean),
	plugins: [
		seo({
			collections: ["pages"],
			tabbedUI: true,
		}),
		payloadCloud(),
	],
});

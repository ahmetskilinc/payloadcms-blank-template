import type { Metadata } from "next";
import type { Page } from "../payload/payload-types";
import { mergeOpenGraph } from "./mergeOpenGraph";

export const generateMeta = (args: { doc: Page }): Metadata => {
	const { doc } = args || {};

	return {
		title: doc?.title ? `${doc?.title} | Ahmet Kilinc` : "Ahmet Kilinc",
		// openGraph: mergeOpenGraph({
		// 	title: doc?.title ? `${doc?.title} | Ahmet Kilinc` : "Ahmet Kilinc",
		// 	url: Array.isArray(doc.slug) ? doc.slug.join("/") : "/",
		// }),
	};
};

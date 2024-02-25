import payload from "payload";
import { Page } from "../payload/payload-types";

export async function fetchPage(slug: string[]): Promise<Page | null> {
	let page: Page | null = null;

	try {
		page = (
			await payload.find({
				collection: "pages",
				where: {
					"page.slug": {
						equals: slug.join("/") || "",
					},
				},
			})
		).docs[0];
	} catch (error) {
		console.error(error);
	}

	return page;
}

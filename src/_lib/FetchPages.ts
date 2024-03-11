import payload from "payload";
import { Page } from "../payload/payload-types";

export async function fetchPages(): Promise<Page[] | null> {
	let post: Page[] | null = null;

	try {
		post = (
			await payload.find({
				collection: "pages",
			})
		).docs;
	} catch (error) {}

	return post;
}

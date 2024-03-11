import { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchPage } from "../../_lib/FetchPage";
import { fetchPages } from "../../_lib/FetchPages";
import { PageTemplate } from "./page.client";
import { generateMeta } from "../../_lib/generateMeta";

export const dynamic = "force-dynamic";

export default async function Page({ params: { slug = [""] } }: { params: { slug: string[] } }) {
	const page = await fetchPage(slug);

	if (!page) {
		return notFound();
	}

	return (
		<div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
			<PageTemplate page={page} />
		</div>
	);
}

export async function generateStaticParams() {
	try {
		const pages = await fetchPages();
		if (pages) {
			return pages?.map(({ page: { slug } }) => slug) as string[];
		} else {
			return [];
		}
	} catch (error) {
		return [];
	}
}

export async function generateMetadata({
	params: { slug = [""] },
}: {
	params: { slug: string[] };
}): Promise<Metadata> {
	const page = await fetchPage(slug);

	return generateMeta({ doc: page });
}

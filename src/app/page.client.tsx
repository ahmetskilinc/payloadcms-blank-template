"use client";

import { useLivePreview } from "@payloadcms/live-preview-react";
import RichText from "../_components/RichText";
import { Page } from "../payload/payload-types";

export const PageTemplate: React.FC<{ page: Page | null | undefined }> = ({ page }) => {
	const { data } = useLivePreview({
		serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || "http://localhost:3000",
		depth: 999,
		initialData: page,
	});

	return <RichText content={data?.content} className="prose" />;
};

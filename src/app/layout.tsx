import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import "../styles/globals.scss";
import { Metadata } from "next";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${GeistSans.variable} ${GeistMono.variable} font-sans bg-white`}>
				<main>{children}</main>
			</body>
		</html>
	);
}

export const metadata: Metadata = {
	metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000"),
	title: {
		default: process.env.NEXT_PUBLIC_SITE_TITLE,
		template: `%s - ${process.env.NEXT_PUBLIC_SITE_TITLE}`,
	},
	description: `${process.env.NEXT_PUBLIC_SITE_TITLE}`,
	keywords: "",
};

import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import "../styles/globals.scss";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${GeistSans.variable} ${GeistMono.variable} font-sans bg-white`}>
				<main>{children}</main>
			</body>
		</html>
	);
}

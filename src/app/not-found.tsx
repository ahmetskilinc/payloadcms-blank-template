import Link from "next/link";

export default function NotFound() {
	return (
		<div className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
			<div className="text-center">
				<h1>
					404 Page not found
					<br />
					Sorry, we couldn’t find the page you’re looking for.
				</h1>
				<div className="mt-10 flex items-center justify-center gap-x-6">
					<Link href="/" className="font-mono text-sm font-semibold leading-6 text-gray-800 hover:underline">
						Go back home <span aria-hidden="true">→</span>
					</Link>
				</div>
			</div>
		</div>
	);
}

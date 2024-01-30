/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["localhost", process.env.NEXT_PUBLIC_SERVER_URL].filter(Boolean).map((url) => url.replace(/https?:\/\//, "")),
	},
};

module.exports = nextConfig;

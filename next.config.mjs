

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["js", "jsx", "ts", "tsx"],
	images: {
		unoptimized: false
	},
	i18n: {
		locales: ["en", "fr"],
		defaultLocale: "en",
		localeDetection: true,
	},
	trailingSlash: true
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['images.ctfassets.net','downloads.ctfassets.net'],
		deviceSizes: [600, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
	},
	experimental: {
		serverActions: true,
	}
}

module.exports = nextConfig

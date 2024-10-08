/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	logging: {
		fetches: {
			fullUrl: true,
		},
	},
	images: {
		remotePatterns: [
			{
				hostname: 'cdn.dummyjson.com',
				protocol: 'https',
			}
		]
	},
	headers: async () => {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'X-Developed-By',
						value: '',
					},
				],
			},
		];
	},
};

export default nextConfig;

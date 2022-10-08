/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    babel: {
        plugins: ["macros"],
    },
}

module.exports = nextConfig

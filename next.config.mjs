/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/calcite-landing-page', // 添加你的仓库名
  assetPrefix: '/calcite-landing-page/', // 添加你的仓库名
  trailingSlash: true,  // 添加这行

  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  
  
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'removeViewBox',
                  active: false,
                },
              ],
            },
          },
        },
      ],
    })
    return config
  },
}

export default nextConfig

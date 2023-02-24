// @type {import('next').NextConfig}
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

const withAntdLess = require("next-plugin-antd-less");

module.exports = withAntdLess({
  lessVarsFilePath: "./src/styles/variables.less",

  webpack(config) {
    return config;
  },
});

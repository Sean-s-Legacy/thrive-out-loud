// @type {import('next').NextConfig}
const nextConfig = {
  reactStrictMode: true,
};
module.exports = nextConfig;
const withAntdLess = require("next-plugin-antd-less");

module.exports = withAntdLess({
  // lessVarsFilePath: "./src/styles/variables.less",
  // lessVarsFilePathAppendToEndOfContent: true,

  webpack(config) {
    return config;
  },
});

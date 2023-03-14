// @type {import('next').NextConfig}
const withAntdLess = require("next-plugin-antd-less");
// const nextConfig = {
//   reactStrictMode: true,
// };




  module.exports = async (phase, { defaultConfig }) => {
    /**
     * @type {import('next').NextConfig}
     */
     const antDLess = withAntdLess({
      lessVarsFilePath: "./src/styles/variables.less",
    
      webpack(config) {
        return config;
      }});
    return antDLess
  }



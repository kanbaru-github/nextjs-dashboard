/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

/** @type {import('path')} pathモジュール */
const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')], // Sassファイル内で使用するパスを指定
  },
}

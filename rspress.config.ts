import * as path from 'node:path';
import { defineConfig } from '@rspress/core';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  lang: 'zh',
  title: 'Sdp',
  base: '/frontdocv2/',
  icon: '/logo_hts_orange.png',
  // description: '开发文档站点描述',
  logo: {
    light: '/logo_hts_orange_title_light.png',
    dark: '/logo_hts_orange_title_dark.png',
  },
  logoText: '开发文档',
  multiVersion: {
    default: 'v0.3',
    versions: ['v0.3'],
    // versions: ['v0.1', 'v0.3'],
  },
  themeConfig: {
    footer: { message: 'Copyright © 2024 | Powered by DDIT', },
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/zangnan/rspress-sdp-n' },
    ],
  },
});

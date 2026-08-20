import * as path from 'node:path';
import { defineConfig } from '@rspress/core';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  lang: 'zh',
  title: 'Sdp',
  base: '/frontdocv2/',
  icon: '/logo_hts_orange.png',
  description: '敏捷开发平台SDP组件及UI规范设计文档，助力设计开发者「更灵活」地搭建出「更美」的产品，让用户「快乐工作」～',
  logo: {
    light: '/logo_hts_orange_title_light.png',
    dark: '/logo_hts_orange_title_dark.png',
  },
  logoText: '敏捷开发平台SDP',
  multiVersion: {
    default: 'v0.3',
    versions: ['v0.3'],
    // versions: ['v0.1', 'v0.3'],
  },
  themeConfig: {
    lastUpdated: true,
    footer: { message: 'Copyright © 2024 | Powered by DDIT', },
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/zangnan/rspress-sdp-n' },
    ],
  },
});

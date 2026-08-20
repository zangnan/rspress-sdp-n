import * as path from 'node:path';
import { defineConfig } from '@rspress/core';
import ghPages from 'rspress-plugin-gh-pages';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  lang: 'zh',
  title: 'Sdp',
  base: '/rspress-sdp-n/',
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
  plugins: [
    ghPages({
      // 本机 HTTPS 出口被拦截,改用 SSH 协议
      repo: 'git@github.com:zangnan/rspress-sdp-n.git',
      branch: 'gh-pages',
      // 部署到 <user>.github.io/<repo> 必须显式声明 siteBase
      siteBase: '/rspress-sdp-n/',
    }),
  ],
});

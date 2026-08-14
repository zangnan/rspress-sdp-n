import * as path from 'node:path';
import { defineConfig } from '@rspress/core';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  lang: 'en',
  // icon: '/rspress-icon.png',
  // logo: {
  //   light: '/rspress-light-logo.png',
  //   dark: '/rspress-dark-logo.png',
  // },
  title: 'Sdp',
  // description: '开发文档站点描述',
  base: '/frontdocv2/',
  icon: '/logo_hts_orange.png',
  logo: {
    light: '/logo_hts_orange_title_light.png',
    dark: '/logo_hts_orange_title_dark.png',
  },
  multiVersion: {
    default: 'v0.3',
    // versions: ['v0.1', 'v0.3'],
    versions: ['v0.3'],
  },

  
  // search: {
  //   versioned: true,
  //   mode: 'local'
  // },

  themeConfig: {
    footer: { message: 'Copyright © 2024 | Powered by DDIT', },
    // lastUpdated: true,
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/web-infra-dev/rspress',
      },
    ],


    // outlineTitle: '目录',
    // searchPlaceholderText: '搜索',
    // enableScrollToTop: true,
    // hideNavbar: 'auto', // always | auto | never
    // prevPageText: '上一页',
    // nextPageText: '下一页',
    // lastUpdated: true,
    // lastUpdatedText: '最后更新时间',
    // // socialLinks: [
    // //   { icon: 'github', mode: 'link', content: 'https://github.com/web-infra-dev/rspress' },
    // //   { icon: 'wechat', mode: 'text', content: '微信号xxx' },
    // //   { icon: 'qq', mode: 'img', content: '/qrcode.png' },
    // // ],
  },
});

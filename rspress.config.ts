import * as path from 'node:path';
import { defineConfig } from '@rspress/core';
import readingTime from 'rspress-plugin-reading-time';
import ghPages from 'rspress-plugin-gh-pages';
import { pluginLlms } from '@rspress/plugin-llms';
import pdfGenerator from 'rspress-plugin-pdf-generator';

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
  // logo: 'https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*A-lcQbVTpjwAAAAAAAAAAAAADmJ7AQ/original',
  logoText: '敏捷开发平台SDP',
  multiVersion: {
    default: 'v0.31',
    versions: ['v0.31'],
    // versions: ['v0.1', 'v0.3'],
  },
  // globalStyles: path.join(__dirname, 'docs/theme/custom.css'),
  themeConfig: {
    lastUpdated: true,
    footer: { message: '© 2026 zn. All Rights Reserved.', },
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/zangnan/rspress-sdp-n' },
    ],
    llmsUI: true,
    // 或者使用自定义选项：
    // llmsUI: {
    //   injectLlmsHint: false, // 禁用面向大语言模型的 HTML/Markdown directive hint
    //   viewOptions: ['markdownLink', 'chatgpt', 'claude'],
    //   placement: 'outline', // 在大纲面板中显示而非 H1 下方
    // },
  },
  plugins: [
    readingTime({
      defaultLocale: 'zh-CN',
    }),
    ghPages({
      repo: 'git@github.com:zangnan/rspress-sdp-n.git',
      branch: 'gh-pages',
      siteBase: '/rspress-sdp-n/',
    }),
    pluginLlms(),
    // pdfGenerator({
    //   mode: 'multiple', // single multiple
    //   outputDir: 'pdf',
    //   fileName: 'site.pdf',
    // }),
  ],
});

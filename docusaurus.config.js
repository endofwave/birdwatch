// docusaurus.config.js
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

module.exports = {
  title: 'BirdWatch',
  tagline: 'Guida all\'osservazione e identificazione degli uccelli',
  url: 'https://endofwave.github.io',
  baseUrl: '/birdwatch/',
  favicon: 'img/favicon.ico',
  organizationName: 'endofwave', // Username GitHub
  projectName: 'birdwatch', // Repository name
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          editUrl: 'https://github.com/endofwave/birdwatch/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Supporto matematico anche nel Blog
          //remarkPlugins: [math],
          //rehypePlugins: [katex],          
          editUrl: 'https://github.com/endofwave/birdwatch/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'BirdWatch',
      logo: {
        alt: 'BirdWatch Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro/getting-started',
          position: 'left',
          label: 'Guida',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/endofwave/birdwatch',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentazione',
          items: [
            {
              label: 'Introduzione',
              to: '/docs/intro/getting-started',
            },
            {
              label: 'Famiglie di Uccelli',
              to: '/docs/bird-families/passerines/overview',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Forum',
              href: 'https://example.com/forum',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} BirdWatch. Built with Docusaurus.`,
    },
  },
};
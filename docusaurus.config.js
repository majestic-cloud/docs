/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Majestic.Cloud documentation',
  tagline: 'Learn. Learn. Learn',
  url: 'https://docs.majestic.cloud',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Majestic.cloud', // Usually your GitHub org/user name.
  projectName: 'majestic.cloud', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Majestic.cloud documentation',
      logo: {
        alt: 'Majestic.cloud Logo',
        src: 'img/majestic.cloud.logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'AWS Services/intro',
          position: 'left',
          label: 'AWS Services',
        },
        {
          type: 'doc',
          docId: 'Topics/intro',
          position: 'left',
          label: 'Topics',
        },
        {
          type: 'doc',
          docId: 'External-tools/intro',
          position: 'left',
          label: 'External tools',
        },
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/majestic-cloud',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/channel/UCKAKDLCR2v0kYxtgHx6AU9w',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/majesticcloud',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/cloud_majestic',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://majestic.cloud',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/majestic-cloud',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}  Majestic.cloud, Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/majestic-cloud/docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/majestic-cloud/docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

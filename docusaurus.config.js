// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const math = require('remark-math');
const katex = require('rehype-katex');

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

const currentYear = new Date().getFullYear()

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ronin Docs',
  tagline: 'Stake and earn rewards on Ronin',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.roninchain.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  
  organizationName: 'axieinfinity', // Usually your GitHub org/user name.
  projectName: 'ronin-documentation', // Usually your repo name.

  staticDirectories: ['static'],

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  plugins: [
    'docusaurus-plugin-sass',
    ['@docusaurus/plugin-client-redirects',
    {
      redirects: [
        {
          from: '/apps/ccip-bridge/smart-contract-requirements',
          to: '/developers/tools/ccip',
        },
        {
          from: '/basics/rewards',
          to: '/protocol/rewards',
        },
        {
          from: '/basics/roles',
          to: '/protocol/roles',
        },
        {
          from: '/basics/nodes',
          to: '/protocol/nodes',
        },
        {
          from: '/get-started',
          to: '/',
        },
      ],
      createRedirects(existingPath) {
        if (existingPath.startsWith('/protocol/delegators/')) {
          // Replace the new path prefix with the old one
          return [
            existingPath.replace('/protocol/delegators/', '/delegators/onboarding/'),
            existingPath.replace('/protocol/delegators/', '/delegators/manage/'),
            existingPath.replace('/protocol/delegators/', '/delegators/'),
            '/docs' + existingPath.replace('/protocol/delegators/', '/delegators/onboarding/'),
            '/docs' + existingPath.replace('/protocol/delegators/', '/delegators/manage/'),
            '/docs' + existingPath.replace('/protocol/delegators/', '/delegators/'),
          ];
        }
        if (existingPath.startsWith('/protocol/validators/')) {
          // Replace the new path prefix with the old one
          return [
            existingPath.replace('/protocol/validators/', '/validators/onboarding/'),
            existingPath.replace('/protocol/validators/', '/validators/'),
            '/docs' + existingPath.replace('/protocol/validators/', '/validators/onboarding/'),
            '/docs' + existingPath.replace('/protocol/validators/', '/validators/'),
          ];
        }
        if (existingPath.includes('/')) {
          return [
            '/docs' + existingPath
          ];
        }
        return undefined; // Return a falsy value: no redirect created
      },
    },]
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
          editUrl: `https://github.com/axieinfinity/ronin-documentation/edit/main`,
          editLocalizedFiles: false,
          editCurrentVersion: false,
          showLastUpdateTime: true,
        },
        blog: {
          path: 'blog',
          blogTitle: 'Technical blog',
          blogDescription: 'Learn about the latest updates on Ronin',
          routeBasePath: 'blog',
          blogSidebarTitle: 'Technical blog',
          showReadingTime: true,
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
        gtag: {
          trackingID: 'G-7XP0LK51BJ', // Measurement ID
          anonymizeIP: false,
        },
        googleTagManager: {
          containerId: 'GTM-PSV4LRD', // Tag ID from Google Tag Manager
        },
        googleAnalytics: {
          trackingID: 'UA-150383258-4',
        },        
      }),
    ],
  ],
  stylesheets: [
    {
      href: '/katex/katex.min.css',
      type: 'text/css',
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        // Global tags
        {name: 'keywords', content: 'web3, dapp, ronin, axie, axs, ron'},

        // Facebook meta tags
        {name: 'og:url', content: 'https://docs.roninchain.com'},
        {name: 'og:type', content: 'website'},
        // {name: 'og:title', content: 'Ronin Documentation'},
        // {name: 'og:description', content: 'Build web3 games with real, player-owned economies.'},
        {name: 'og:image', content: '/img/thumbnail.png'},
        // Twitter meta tags
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:domain', content: 'docs.roninchain.com'},
        {name: 'twitter:url', content: 'https://docs.roninchain.com'},
        // {name: 'twitter:title', content: 'Ronin Documentation'},
        // {name: 'twitter:description', content: 'Build web3 games with real, player-owned economies.'},
        {name: 'twitter:image', content: '/img/thumbnail.png'},
      ],
      algolia: {
        appId: 'RXU5ZAVMCJ',
        apiKey: '46141953dde60ffc0242ca8e0252dbe8',
        indexName: 'roninchain',
      },
      docs: {
        sidebar: {
          hideable: false,
          autoCollapseCategories: false,
        },
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      // announcementBar: {
      //   id: 'slashing',
      //   content:
      //     'Slashing rules have been updated, see <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ronin_network/status/1645664361799901185?s=46&t=YkUXw7V1JhDN_wzIX5WIUg">Twitter announcement</a>',
      //   backgroundColor: '#EEF9FD',
      //   textColor: '#091E42',
      //   isCloseable: false,
      // },
      navbar: {
        title: 'Ronin',
        logo: {
          alt: 'Ronin logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            label: 'Basics',
            to: '/basics',
            //target: '_blank',
          },
          {
            label: 'Protocol',
            to: '/protocol',
          },
          {
            label: 'Developers',
            to: '/developers',
          },
          // Blog
          {
            label: 'Blog',
            to: 'blog',
            position: 'right',
          },
          // Search
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/roninnetwork',
              },
              {
                label: 'X',
                href: 'https://twitter.com/ronin_network',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'Ronin brand kit',
                href: 'https://drive.google.com/drive/folders/1ZM0R6fd13IhvBpTFwOBebYZqmTxQNgJi',
              },
              {
                label: 'Support',
                to: 'https://support.roninchain.com/hc/en-us',
              },
            ],
          },
        ],
        copyright: `© ${currentYear - 1} - ${currentYear} Sky Mavis`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config

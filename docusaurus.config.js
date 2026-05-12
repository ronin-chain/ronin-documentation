// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import math from "remark-math";
import katex from "rehype-katex";

import lightCodeTheme from "prism-react-renderer/themes/github/index.js";
import darkCodeTheme from "prism-react-renderer/themes/dracula/index.js";

const currentYear = new Date().getFullYear();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Ronin Docs",
  tagline: "Build on Ronin and earn rewards under Proof of Distribution",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.roninchain.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  organizationName: "axieinfinity", // Usually your GitHub org/user name.
  projectName: "ronin-documentation", // Usually your repo name.

  staticDirectories: ["static"],

  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],

  plugins: [
    "docusaurus-plugin-sass",
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          // Unrelated legacy redirects
          {
            from: "/apps/ccip-bridge/smart-contract-requirements",
            to: "/developers/tools/ccip",
          },
          {
            from: "/get-started",
            to: "/",
          },
          // Old whitepaper PDF link. PDF is out of date; surface the
          // introduction instead.
          {
            from: "/basics/white-paper",
            to: "/basics/introduction",
          },
          // Old basics aliases that previously pointed into protocol/*
          // now retired; keep them landing on PoD so external links stay alive.
          {
            from: "/basics/rewards",
            to: "/proof-of-distribution/",
          },
          {
            from: "/basics/roles",
            to: "/proof-of-distribution/",
          },
          {
            from: "/basics/nodes",
            to: "/developers/nodes/",
          },
          // Retired node-setup sub-pages. The standalone setup, build-from-source,
          // requirements, and upgrade-node-version guides were replaced by a single
          // landing page that points at Conduit's reth + op-node docker setup.
          {
            from: "/developers/nodes/setup",
            to: "/developers/nodes/",
          },
          {
            from: "/developers/nodes/build-from-source",
            to: "/developers/nodes/",
          },
          {
            from: "/developers/nodes/upgrade-node-version",
            to: "/developers/nodes/",
          },
          {
            from: "/developers/nodes/requirements",
            to: "/developers/nodes/",
          },
          // Node-setup short URLs
          {
            from: "/developers/nodes/mainnet",
            to: "/developers/nodes/",
          },
          {
            from: "/developers/nodes/testnet",
            to: "/developers/nodes/",
          },
          {
            from: "/developers/nodes/mainnet-archive",
            to: "/developers/nodes/",
          },
          {
            from: "/developers/nodes/testnet-archive",
            to: "/developers/nodes/",
          },
          // Retired validator setup pages. Validators do not exist on the L2;
          // readers are sent to the RPC node overview.
          {
            from: "/protocol/validators/setup",
            to: "/developers/nodes/",
          },
          {
            from: "/protocol/validators/setup/mainnet",
            to: "/developers/nodes/",
          },
          {
            from: "/protocol/validators/setup/testnet",
            to: "/developers/nodes/",
          },
          {
            from: "/protocol/validators/setup/mainnet/run-validator",
            to: "/developers/nodes/",
          },
          {
            from: "/protocol/validators/setup/mainnet/run-combined",
            to: "/developers/nodes/",
          },
          {
            from: "/protocol/validators/setup/testnet/run-combined",
            to: "/developers/nodes/",
          },
          {
            from: "/protocol/validators/setup/cli",
            to: "/developers/nodes/",
          },
          {
            from: "/protocol/validators/setup/overview",
            to: "/developers/nodes/",
          },
          {
            from: "/protocol/validators/setup/upgrade-validator",
            to: "/developers/nodes/",
          },
          {
            from: "/protocol/validators/setup/parameters",
            to: "/developers/network/",
          },
          {
            from: "/protocol/validators/setup/parameters/mainnet",
            to: "/developers/network/",
          },
          {
            from: "/protocol/validators/setup/parameters/testnet",
            to: "/developers/network/",
          },
          // Validator key/security pages used to live under /developers/nodes/validators/.
          // Those guides are retired with DPoS; surviving readers go to the node overview.
          {
            from: "/protocol/validators/setup/generate-keys",
            to: "/developers/nodes/",
          },
          {
            from: "/protocol/validators/setup/random-beacon",
            to: "/developers/nodes/",
          },
          {
            from: "/protocol/validators/setup/clean-data",
            to: "/developers/nodes/",
          },
          {
            from: "/protocol/validators/setup/security",
            to: "/developers/nodes/",
          },
          {
            from: "/developers/nodes/validators",
            to: "/developers/nodes/",
          },
          {
            from: "/developers/nodes/validators/generate-keys",
            to: "/developers/nodes/",
          },
          {
            from: "/developers/nodes/validators/random-beacon",
            to: "/developers/nodes/",
          },
          {
            from: "/developers/nodes/validators/clean-data",
            to: "/developers/nodes/",
          },
          {
            from: "/developers/nodes/validators/security",
            to: "/developers/nodes/",
          },
          // Retired DPoS protocol pages -> PoD overview.
          // Search engines and outbound links should land on the live program,
          // not a 404.
          {
            from: "/protocol",
            to: "/proof-of-distribution/",
          },
          {
            from: "/protocol/overview",
            to: "/proof-of-distribution/",
          },
          {
            from: "/protocol/roles",
            to: "/proof-of-distribution/",
          },
          {
            from: "/protocol/nodes",
            to: "/developers/nodes/",
          },
          {
            from: "/protocol/rewards",
            to: "/proof-of-distribution/",
          },
          // Retired DPoS validator pages.
          {
            from: "/protocol/validators",
            to: "/proof-of-distribution/",
          },
          {
            from: "/protocol/validators/become-validator",
            to: "/proof-of-distribution/register",
          },
          {
            from: "/protocol/validators/slashing",
            to: "/proof-of-distribution/",
          },
          {
            from: "/protocol/validators/faq",
            to: "/proof-of-distribution/faq",
          },
          {
            from: "/protocol/validators/governance",
            to: "/proof-of-distribution/",
          },
          {
            from: "/protocol/validators/governance/overview",
            to: "/proof-of-distribution/",
          },
          {
            from: "/protocol/validators/governance/proposals",
            to: "/proof-of-distribution/",
          },
          {
            from: "/protocol/validators/manage",
            to: "/proof-of-distribution/manage",
          },
          {
            from: "/protocol/validators/manage/view-activity",
            to: "/proof-of-distribution/manage",
          },
          {
            from: "/protocol/validators/manage/view-analytics",
            to: "/proof-of-distribution/manage",
          },
          {
            from: "/protocol/validators/manage/view-profile",
            to: "/proof-of-distribution/manage",
          },
          {
            from: "/protocol/validators/manage/claim-rewards",
            to: "/proof-of-distribution/manage",
          },
          {
            from: "/protocol/validators/manage/stake",
            to: "/proof-of-distribution/manage",
          },
          {
            from: "/protocol/validators/manage/finality",
            to: "/proof-of-distribution/manage",
          },
          {
            from: "/protocol/validators/manage/vrf-key",
            to: "/proof-of-distribution/manage",
          },
          {
            from: "/protocol/validators/manage/commission",
            to: "/proof-of-distribution/manage",
          },
          {
            from: "/protocol/validators/manage/addresses",
            to: "/proof-of-distribution/manage",
          },
          {
            from: "/protocol/validators/manage/maintenance",
            to: "/proof-of-distribution/manage",
          },
          {
            from: "/protocol/validators/manage/maintenance-exit",
            to: "/proof-of-distribution/manage",
          },
          {
            from: "/protocol/validators/manage/renounce",
            to: "/proof-of-distribution/manage",
          },
          {
            from: "/protocol/validators/manage/emergency-exit",
            to: "/proof-of-distribution/manage",
          },
          // Retired DPoS delegator pages.
          {
            from: "/protocol/delegators",
            to: "/proof-of-distribution/",
          },
          {
            from: "/protocol/delegators/become-delegator",
            to: "/proof-of-distribution/register",
          },
          {
            from: "/protocol/delegators/stake",
            to: "/proof-of-distribution/",
          },
          {
            from: "/protocol/delegators/claim-rewards",
            to: "/proof-of-distribution/manage",
          },
          {
            from: "/protocol/delegators/validators",
            to: "/proof-of-distribution/",
          },
          {
            from: "/protocol/delegators/faq",
            to: "/proof-of-distribution/faq",
          },
          // Retired RON Staking dApp guide.
          {
            from: "/apps/ron-staking",
            to: "/proof-of-distribution/",
          },
          // Original PoD location (developers/proof-of-distribution/) was never
          // shipped to production but is preserved for any internal links that
          // were drafted against the early sidebar.
          {
            from: "/developers/proof-of-distribution",
            to: "/proof-of-distribution/",
          },
          {
            from: "/developers/proof-of-distribution/register",
            to: "/proof-of-distribution/register",
          },
          {
            from: "/developers/proof-of-distribution/verify",
            to: "/proof-of-distribution/verify",
          },
          {
            from: "/developers/proof-of-distribution/activate",
            to: "/proof-of-distribution/activate",
          },
          {
            from: "/developers/proof-of-distribution/manage",
            to: "/proof-of-distribution/manage",
          },
          {
            from: "/developers/proof-of-distribution/faq",
            to: "/proof-of-distribution/faq",
          },
        ],
        createRedirects(existingPath) {
          // Preserve historical aliases from before the protocol/* prefix existed.
          if (existingPath.startsWith("/proof-of-distribution")) {
            return ["/docs" + existingPath];
          }
          if (existingPath.includes("/")) {
            return ["/docs" + existingPath];
          }
          return undefined;
        },
      },
    ],
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          remarkPlugins: [math],
          rehypePlugins: [katex],
          editUrl: `https://github.com/axieinfinity/ronin-documentation/edit/main`,
          editLocalizedFiles: false,
          editCurrentVersion: false,
          showLastUpdateTime: true,
        },
        blog: {
          path: "blog",
          blogTitle: "Technical blog",
          blogDescription: "Learn about the latest updates on Ronin",
          routeBasePath: "blog",
          blogSidebarTitle: "Technical blog",
          showReadingTime: true,
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
        gtag: {
          trackingID: "G-7XP0LK51BJ", // Measurement ID
          anonymizeIP: false,
        },
        googleTagManager: {
          containerId: "GTM-PSV4LRD", // Tag ID from Google Tag Manager
        },
        googleAnalytics: {
          trackingID: "UA-150383258-4",
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: "/katex/katex.min.css",
      type: "text/css",
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        // Global tags
        { name: "keywords", content: "web3, dapp, ronin, axie, axs, ron" },

        // Facebook meta tags
        { name: "og:url", content: "https://docs.roninchain.com" },
        { name: "og:type", content: "website" },
        // {name: 'og:title', content: 'Ronin Documentation'},
        // {name: 'og:description', content: 'Build web3 games with real, player-owned economies.'},
        { name: "og:image", content: "/img/thumbnail.png" },
        // Twitter meta tags
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:domain", content: "docs.roninchain.com" },
        { name: "twitter:url", content: "https://docs.roninchain.com" },
        // {name: 'twitter:title', content: 'Ronin Documentation'},
        // {name: 'twitter:description', content: 'Build web3 games with real, player-owned economies.'},
        { name: "twitter:image", content: "/img/thumbnail.png" },
      ],
      algolia: {
        appId: "RXU5ZAVMCJ",
        apiKey: "46141953dde60ffc0242ca8e0252dbe8",
        indexName: "roninchain",
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
      /*
      announcementBar: {
        id: 'hardfork',
        content: `Ronin is preparing for an upcoming hardfork at <a href="https://app.roninchain.com/block/43447600">block 43447600</a> that will introduce a base fee mechanism for gas pricing, in line with EIP-1559. <a href="/developers/network/eip-1559/">Learn more</a>.`,
        backgroundColor: '#FFDE81',
        textColor: '#1D273D',
        isCloseable: false,
      },
      */
      navbar: {
        title: "Ronin",
        logo: {
          alt: "Ronin logo",
          src: "img/logo.svg",
        },
        items: [
          {
            label: "Basics",
            to: "/basics",
          },
          {
            label: "Proof of Distribution",
            to: "/proof-of-distribution/",
          },
          {
            label: "Developers",
            to: "/developers",
          },
          {
            label: "Blog",
            to: "blog",
            position: "right",
          },
          {
            type: "search",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/roninnetwork",
              },
              {
                label: "X",
                href: "https://twitter.com/ronin_network",
              },
            ],
          },
          {
            title: "Links",
            items: [
              {
                label: "Ronin brand kit",
                href: "https://drive.google.com/drive/folders/1ZM0R6fd13IhvBpTFwOBebYZqmTxQNgJi",
              },
              {
                label: "Support",
                to: "https://support.roninchain.com/hc/en-us",
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
};

module.exports = config;

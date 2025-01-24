/**
 * Creating a sidebar enables you to:
  - create an ordered group of docs
  - render a sidebar for each doc of that group
  - provide next/previous navigation

  The sidebars can be generated from the filesystem, or explicitly defined here.

  Create as many sidebars as you want.
 */

// @ts-check

/** @type {import("@docusaurus/plugin-content-docs").SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: "autogenerated", dirName: "."}],

  // But you can create a sidebar manually

  sidebar: [
    // Ronin Network basics
    {
      type: "category",
      label: "Basics",
      collapsed: false,
      collapsible: false,
      link: {
        type: "generated-index",
        description: "Everything you need to know about Ronin.",
        slug: "/basics",
      },
      items: [
        // Introduction to Ronin
        {
          type: "doc",
          label: "Introduction to Ronin",
          id: "basics/introduction",
        },
        // Acquire RON
        "basics/acquire-ron",
        // Tokenomics
        "basics/tokenomics",
        // Security audits
        "basics/audits",
        {
          type: "category",
          label: "dApps",
          link: {
            type: "generated-index",
            description: "User guides for selected dApps in the Ronin ecosystem.",
            slug: "/apps",
          },
          items: [
            // RON Staking
            "apps/ron-staking",
            // Katana
            {
              type: "category",
              label: "Katana",
              link: {
                type: "doc",
                id: "apps/katana/overview",
              },
              items: [
                // Swap tokens
                "apps/katana/guides/swap-tokens",
                // Liquidity pools
                {
                  type: "category",
                  label: "Liquidity pools",
                  link: {
                    type: "generated-index",
                    description: "Guides for creating and managing liquidity pools.",
                    slug: "apps/katana/pools",
                  },
                  items: [
                    // Create a liquidity pool
                    "apps/katana/guides/create-pool",
                    // Add liquidity to a pool
                    "apps/katana/guides/add-liquidity",
                  ],
                },
                // Farms
                {
                  type: "category",
                  label: "Farms",
                  link: {
                    type: "generated-index",
                    description: "Guides for creating farms and staking LP tokens.",
                    slug: "apps/katana/farms",
                  },
                  items: [
                    // Create a farm
                    "apps/katana/guides/create-farm",
                    // Stake LP tokens
                    "apps/katana/guides/stake-tokens",
                  ],
                },
                // {
                //   type: "link",
                //   label: "Katana Core SDK",
                //   href: "https://github.com/skymavis/katana-sdk/tree/main/packages/katana-core",
                // },
              ],
            },
            // Ronin Safe
            "apps/multisig",
            // Ronin Bridge
            {
              type: "category",
              label: "Ronin Bridge",
              link: {
                type: "doc",
                id: "apps/ronin-bridge/overview",
              },
              items: [
                // Deposit ERC-20 tokens
                "apps/ronin-bridge/guides/deposit-token",
                // Withdraw ERC-20 tokens
                "apps/ronin-bridge/guides/withdraw-token",
                // Deposit NFTs
                "apps/ronin-bridge/guides/deposit-nft",
                // Withdraw NFTs
                "apps/ronin-bridge/guides/withdraw-nft",
                // Token withdrawal limits
                "apps/ronin-bridge/reference/withdrawal-limits",
              ],
            },
            // CCIP Bridge
            {
              type: "category",
              label: "CCIP Bridge",
              link: {
                type: "doc",
                id: "apps/ccip-bridge/overview",
              },
              items: [
                // Transfer ERC-20 tokens
                "apps/ccip-bridge/guides/transfer-token",
                // Learn the token requirements to integrate with CCIP
                "apps/ccip-bridge/guides/smart-contract-requirements",
              ],
            },
            // Ronin Explorer
            "apps/ronin-explorer",
            // Token Revoke
            "apps/revoke",
            // RNS
            {
              type: "category",
              label: "Ronin Name Service",
              link: {
                type: "doc",
                id: "apps/rns/overview",
              },
              items: [
                {
                  type: "category",
                  label: "Register an RNS name",
                  link: {
                    type: "generated-index",
                    description: "Guides to register different categories of RNS names.",
                    slug: "apps/rns/register",
                  },
                  items: [
                    // Register a regular RNS name
                    "apps/rns/guides/register/regular",
                    // Buy an RNS name at auction
                    "apps/rns/guides/register/auctioned",
                    // Register a protected RNS name
                    "apps/rns/guides/register/protected",
                  ],
                },
                // Manage RNS names
                "apps/rns/guides/manage",
                // Trade RNS names
                "apps/rns/guides/trade",
                // RNS FAQ
                "apps/rns/reference/faq",
              ],
            },
          ],
        },
        // Community
        "basics/community",
        // Contribute to the documentation
        {
          type: "category",
          label: "Contribute",
          link: {
            type: "generated-index",
            description: "Contribute to the Ronin documentation.",
            slug: "/basics/contribute",
          },
          items: [
            // Contribution guide
            "CONTRIBUTING",
            // Content style guide
            "basics/contribute/style-guide",
            // Content templates
            "basics/contribute/templates",
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Ronin Protocol",
      collapsed: false,
      collapsible: false,
      link: {
        type: "generated-index",
        description: "Details about the Ronin consensus protocol.",
        slug: "/protocol",
      },
      items: [
        "protocol/overview",
        "protocol/roles",
        "protocol/nodes",
        "protocol/rewards",
        //Validators
        {
          type: "category",
          label: "Validators",
          link: {
            type: "doc",
            id: "protocol/validators/index",
          },
          items: [
            {
              type: "category",
              label: "Setup",
              link: {
                type: "doc",
                id: "protocol/validators/setup/overview",
              },
              items: [
                {
                  type: "category",
                  label: "Mainnet",
                  link: {
                    type: "generated-index",
                    slug: "/protocol/validators/setup/mainnet",
                    description:
                      "Node installation guides for the Ronin mainnet.",
                  },
                  items: [
                    // Run a validator and bridge together
                    "protocol/validators/setup/mainnet/run-combined",
                    // Run a validator
                    "protocol/validators/setup/mainnet/run-validator",
                  ],
                },
                {
                  type: "category",
                  label: "Saigon testnet",
                  link: {
                    type: "generated-index",
                    title: "Saigon testnet",
                    description:
                      "Node installation guides for the Saigon testnet.",
                    slug: "/protocol/validators/setup/testnet",
                  },
                  items: [
                    // Run a validator and bridge together
                    "protocol/validators/setup/testnet/run-combined",
                  ],
                },
                // Generate keys
                "protocol/validators/setup/generate-keys",
                // Install Ronin CLI
                "protocol/validators/setup/cli",
                // Latest version
                "protocol/validators/setup/upgrade-validator",
                // Latest version
                "protocol/validators/setup/random-beacon",
                // Clean data
                "protocol/validators/setup/clean-data",
                // Network parameters
                {
                  type: "category",
                  label: "Network parameters",
                  link: {
                    type: "generated-index",
                    title: "Network parameters",
                    slug: "/protocol/validators/setup/parameters",
                  },
                  items: [
                    // Ronin mainnet
                    "protocol/validators/setup/parameters/mainnet",
                    // Saigon testnet
                    "protocol/validators/setup/parameters/testnet",
                  ],
                },
                // Security hardening
                "protocol/validators/setup/security",
              ],
            },
            // Become a validator
            "protocol/validators/become-validator",
            // Manage your account
            {
              type: "category",
              label: "Manage validator account",
              link: {
                type: "generated-index",
                title: "Manage your validator account",
                description:
                  "Guides for increasing or withdrawing your stake, claiming rewards, and managing your validator account.",
                slug: "/protocol/validators/manage",
              },
              items: [
                // View activity
                "protocol/validators/manage/view-activity",
                // View analytics
                "protocol/validators/manage/view-analytics",
                // View profile details
                "protocol/validators/manage/view-profile",
                // Claim rewards
                "protocol/validators/manage/claim-rewards",
                // Increase or move stake
                "protocol/validators/manage/stake",
                // Add or change finality vote key
                "protocol/validators/manage/finality",
                // Add or change VRF key
                "protocol/validators/manage/vrf-key",
                // Change commission rate
                "protocol/validators/manage/commission",
                // Change admin address
                "protocol/validators/manage/addresses",
                // Schedule maintenance
                "protocol/validators/manage/maintenance",
                // Early exit maintenance
                "protocol/validators/manage/maintenance-exit",
                // Renounce validator role
                "protocol/validators/manage/renounce",
                // Request emergency exit
                "protocol/validators/manage/emergency-exit",
              ],
            },
            // Slashing
            "protocol/validators/slashing",
            // Governance
            {
              type: "category",
              label: "Governance",
              link: {
                type: "doc",
                id: "protocol/validators/governance/overview",
              },
              items: [
                // Create and vote on proposals
                "protocol/validators/governance/proposals",
              ],
            },
            // FAQ
            "protocol/validators/faq",
          ],
        },
        // Delegators
        {
          type: "category",
          label: "Delegators",
          link: {
            type: "doc",
            id: "protocol/delegators/index",
          },
          items: [
            // Stake RON
            "protocol/delegators/become-delegator",
            // Manage your stake
            "protocol/delegators/stake",
            // Claim or restake your rewards
            "protocol/delegators/claim-rewards",
            // Track your validators
            "protocol/delegators/validators",
            // FAQ
            "protocol/delegators/faq",
          ],
        },

        //Bridge Operators
        {
          type: "category",
          label: "Bridge operators",
          link: {
            type: "doc",
            id: "protocol/bridge-operators/index",
          },
          items: [
            {
              type: "category",
              label: "Setup",
              link: {
                type: "doc",
                id: "protocol/bridge-operators/setup/overview",
              },
              items: [
                "protocol/bridge-operators/setup/run-bridge",
                "protocol/bridge-operators/setup/upgrade-bridge",
              ],
            },
            // Slashing
            "protocol/bridge-operators/slashing",
            // Governance
            {
              type: "category",
              label: "Governance",
              link: {
                type: "doc",
                id: "protocol/bridge-operators/governance/overview",
              },
              items: [
                // Create and vote on proposals
                "protocol/bridge-operators/governance/proposals",
              ],
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Developers",
      collapsed: false,
      collapsible: false,
      link: {
        type: "generated-index",
        description: "Build on Ronin.",
        slug: "/developers",
      },
      items: [
        "developers/network",
        {
          type: "category",
          label: "Node setup",
          link: {
            type: "generated-index",
            description: "A Ronin node is the building block of the Ronin network infrastructure. Nodes connect together to conduct consensus on transactions, maintain the ledger, and provide other useful functions.",
            slug: "/developers/nodes",
          },
          items:[
            "developers/nodes/mainnet",
            "developers/nodes/mainnet-archive",
            "developers/nodes/testnet",
            "developers/nodes/testnet-archive",
            "developers/nodes/upgrade-node-version",
          ]
        },
        {
          type: "category",
          label: "Smart Contracts",
          link: {
            type: "doc",
            id: "developers/smart-contracts/deploy"
          },
          items:[
            "developers/smart-contracts/deploy",
            "developers/smart-contracts/verify",
            "developers/smart-contracts/guidelines",
          ]
        },
        {
          type: "category",
          label: "Tools and services",
          link: {
            type: "doc",
            id: "developers/tools/node-providers"
          },
          items:[
            "developers/tools/node-providers",
            "developers/tools/api-providers",
            {
              type: "category",
              label: "Oracles",
              link: {
                type: "generated-index",
                description: "Oracles are critical components in the Ronin ecosystem that enable smart contracts to interact with data from the outside world. They serve as bridges between the blockchain and external data sources, providing trusted and verifiable information that smart contracts can use to execute logic.",
                slug: "/oracles",
              },
              items: [
                "developers/tools/oracles/pyth"
              ]
            },
            "developers/tools/vrf",
            "developers/tools/delegation",
            "developers/tools/faucet",
          ]
        },
        {
          type: 'link',
          label: 'Mavis docs',
          href: 'https://docs.skymavis.com/',
        }
      ],
    },
  ],
};

module.exports = sidebars;

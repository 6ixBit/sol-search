// Categories data
export interface Category {
    id: string;
    name: string;
    icon: string;
  }

export const categories: Category[] = [
    { id: 'dexes', name: 'DEXes', icon: '📊' },
    { id: 'wallets', name: 'Wallets', icon: '👛' },
    { id: 'trading', name: 'Trading Platforms', icon: '📈' },
    { id: 'jobs', name: 'Jobs', icon: '💼' },
    { id: 'spend', name: 'Spend', icon: '💳' },
    { id: 'education', name: 'Education', icon: '📚' },
    { id: 'nfts', name: 'NFTs', icon: '🖼️' },
    { id: 'tools', name: 'Developer Tools', icon: '🛠️' },
    // { id: 'social', name: 'Social', icon: '👥' },
    // { id: 'liquidity', name: 'Liquidity Pools', icon: '💧' },
    // { id: 'gaming', name: 'Gaming', icon: '🎮' },
  ];
  
  // Sample resources data
  export interface Resource {
    id: string;
    category: string;
    name: string;
    description: string;
    url: string;
    tags?: string[];
  }

  export const resources: Resource[] = [
    // DEXes
    {
      id: 'raydium',
      category: 'dexes',
      name: 'Raydium',
      description: 'An automated market maker (AMM) built on the Solana blockchain that leverages the central order book of the Serum DEX.',
      url: 'https://raydium.io/',
      tags: ['AMM', 'Trading', 'Popular'],
    },
    {
      id: 'pump',
      category: 'dexes',
      name: 'Pump Fun',
      description: 'A user-friendly decentralized exchange for the Solana ecosystem focused on the best-in-class trading experience.',
      url: 'https://pump.fun',
      tags: ['Launchpad', 'Simple UI', 'Trading', 'Memecoins'],
    },

    {
      id: 'bonk',
      category: 'dexes',
      name: 'Bonk Fun',
      description: 'Bonk is a launch pad for creating memecoins on Solana.',
      url: 'https://letsbonk.fun/',
      tags: ['Launchpad', 'Memecoins'],
    },
    {
      id: 'meteora',
      category: 'dexes',
      name: 'Meteora',
      description: 'A decentralized exchange protocol with a fully on-chain central limit order book (CLOB).',
      url: 'https://www.meteora.ag/',
      tags: ['Order Book', 'Protocol'],
    },
    {
      id: 'jupiter',
      category: 'dexes',
      name: 'Jupiter Aggregator',
      description: 'The key liquidity aggregator for Solana, providing the best swap routes across all Solana DEXes.',
      url: 'https://jup.ag/',
      tags: ['Aggregator', 'Best Rates'],
    },
  
    // Wallets
    {
      id: 'phantom',
      category: 'wallets',
      name: 'Phantom',
      description: 'A friendly, easy-to-use crypto wallet built for the Solana blockchain that makes it safe and easy to store, send, receive, collect, and swap tokens.',
      url: 'https://phantom.com/',
      tags: ['Browser Extension', 'Mobile'],
    },
    {
      id: 'solflare',
      category: 'wallets',
      name: 'Solflare',
      description: 'A non-custodial wallet built specifically for Solana that supports Ledger hardware wallets.',
      url: 'https://www.solflare.com/',
      tags: ['Browser Extension', 'Hardware Support'],
    },
    {
      id: 'trust',
      category: 'wallets',
      name: 'Trust Wallet',
      description: 'A multi-chain wallet that supports Solana and xNFTs, bringing a new app-store-like experience to web3.',
      url: 'https://trustwallet.com/',
      tags: ['Multi-chain', 'xNFTs'],
    },
  
    // Trading Platforms
    {
      id: 'axiom',
      category: 'trading',
      name: 'Axiom',
      description: 'A decentralized, cross-margin trading platform offering spot markets, perpetual futures, and staking.',
      url: 'https://axiom.trade/@sixpaths',
      tags: ['Memecoin', 'Margin Trading', 'Trading'],
    },
    {
      id: 'bullx',
      category: 'trading',
      name: 'Bullx',
      description: 'A decentralized exchange that enables permissionless leverage trading of crypto assets.',
      url: 'https://bullx.io/',
      tags: ['Perpetuals', 'Memecoins', 'Trading'],
    },
    {
      id: 'photon',
      category: 'trading',
      name: 'Photon',
      description: 'A DeFi exchange built on Solana focusing on memecoin trading.',
      url: 'https://photon-sol.tinyastro.io/',
      tags: ['AMM', 'Trading', 'Memecoins'],
    },
  
    // Jobs
    {
      id: 'solana_jobs',
      category: 'jobs',
      name: 'Solana Jobs',
      description: 'Official job board for roles in the Solana ecosystem, from developers to marketing and design.',
      url: 'https://jobs.solana.com/jobs',
      tags: ['Official', 'Full-time'],
    },
    {
      id: 'remote3',
      category: 'jobs',
      name: 'Remote3',
      description: 'Job board featuring Solana developer positions, including remote and contract opportunities.',
      url: 'https://www.remote3.co/',
      tags: ['Remote', 'Contract', 'Full-time'],
    },
    {
      id: 'web3_careers',
      category: 'jobs',
      name: 'Web3 Careers',
      description: 'Find Solana development, product, and marketing roles across Web3 and DeFi projects.',
      url: 'https://web3.careers/',
      tags: ['DeFi', 'Web3'],
    },

    // SPEND
    {
      id: 'solcard',
      category: 'spend',
      name: 'Solcard',
      description: 'Solcard is a platform for spending your Solana using Apple Pay.',
      url: 'https://solcard.cc/r/sixthpath',
      tags: ['Spend', 'Crypto', 'No-KYC'],
    },

    {
      id: 'kast',
      category: 'spend',
      name: 'Kast',
      description: 'KAST is the step crypto and Web3 needed, providing an off-ramp debit card that makes everyday purchases simple and fast.',
      url: 'https://www.kast.xyz/',
      tags: ['Spend', 'Crypto', 'KYC'],
    },
  
    // Education
    {
      id: 'hackquest',
      category: 'education',
      name: 'Hack Quest',
      description: 'A developer resource that provides the essential concepts and references for building applications on Solana with Rust.',
      url: 'https://www.hackquest.io/learning-track/Solana',
      tags: ['Development', 'Reference', 'Beginners'],
    },
    {
      id: 'rareskills',
      category: 'education',
      name: 'Rare Skills',
      description: 'Designed for engineers with a beginner or intermediate background in Ethereum or EVM development to get up to speed quickly',
      url: 'https://www.rareskills.io/solana-tutorial',
      tags: ['Beginners', 'Course'],
    },

  
    // NFTs
    {
      id: 'magic_eden',
      category: 'nfts',
      name: 'Magic Eden',
      description: 'The leading NFT marketplace on Solana with the largest collection of NFTs for browsing, buying and selling.',
      url: 'https://magiceden.us/solana',
      tags: ['Marketplace', 'Popular'],
    },
    {
      id: 'metaplex',
      category: 'nfts',
      name: 'Metaplex',
      description: 'The protocol that powers NFTs on Solana, providing tools for creators to launch their collections.',
      url: 'https://www.metaplex.com/',
      tags: ['Protocol', 'Tools'],
    },
  
    // Social
    // {
    //   id: 'dialect',
    //   category: 'social',
    //   name: 'Dialect',
    //   description: 'Web3 messaging protocol built on Solana that enables wallet-to-wallet communication.',
    //   url: '#',
    //   tags: ['Messaging', 'Protocol'],
    // },
    // {
    //   id: 'solcial',
    //   category: 'social',
    //   name: 'Solcial',
    //   description: 'Decentralized and censorship-resistant social media platform built on Solana.',
    //   url: '#',
    //   tags: ['Social Media', 'Decentralized'],
    // },

    // // Liquidity Pools
    // {
    //   id: 'saber',
    //   category: 'liquidity',
    //   name: 'Saber',
    //   description: 'Cross-chain stablecoin and wrapped assets exchange on Solana focusing on capital efficiency.',
    //   url: '#',
    //   tags: ['Stablecoins', 'Low Slippage'],
    // },
    // {
    //   id: 'mercurial',
    //   category: 'liquidity',
    //   name: 'Mercurial Finance',
    //   description: 'Dynamic vaults for stable assets on Solana with higher capital efficiency and better swap rates.',
    //   url: '#',
    //   tags: ['Stable Pools', 'Capital Efficient'],
    // },
    // {
    //   id: 'atrix',
    //   category: 'liquidity',
    //   name: 'Atrix',
    //   description: 'Decentralized liquidity provision protocol allowing users to earn fees by providing tokens to pools.',
    //   url: '#',
    //   tags: ['Farming', 'Yield'],
    // },

  
    // // Developer Tools
    // {
    //   id: 'anchor',
    //   category: 'tools',
    //   name: 'Anchor',
    //   description: 'Development framework for Solana that makes it easy to build secure on-chain programs.',
    //   url: '#',
    //   tags: ['Framework', 'Rust'],
    // },
    // {
    //   id: 'solana-playground',
    //   category: 'tools',
    //   name: 'Solana Playground',
    //   description: 'Web-based IDE for building, deploying, and testing Solana programs without local setup.',
    //   url: '#',
    //   tags: ['IDE', 'WebApp'],
    // },
  
    // Gaming
    // {
    //   id: 'star-atlas',
    //   category: 'gaming',
    //   name: 'Star Atlas',
    //   description: 'A grand strategy game of space exploration, territorial conquest, and political domination.',
    //   url: '#',
    //   tags: ['MMO', 'Strategy'],
    // },
    // {
    //   id: 'aurory',
    //   category: 'gaming',
    //   name: 'Aurory',
    //   description: 'A play-to-earn gaming metaverse powered by Solana with NFT gameplay elements.',
    //   url: '#',
    //   tags: ['Play-to-Earn', 'RPG'],
    // },
  ];
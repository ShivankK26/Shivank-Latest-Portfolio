import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  // { name: "Recommendations", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I'm a FullStack Web3 Engineer Building on EVM, Solana, and Aptos Chains.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Working & Collaborating Remotely across the Globe.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech Stack.",
    description: "Constantly improving",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Handling the Code in Production.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Code from Vulnerabilities and Attacks.",
    description: "Securing the",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Wanting to Start a Project Together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Stake to Solve",
    des: "Building...",
    img: "",
    // iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    // link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Art Auction Gallery",
    des: "Building...",
    img: "",
    // iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    // link: "/ui.earth.com",
  },
  {
    id: 3,
    title: "Router Protocol Academy",
    des: "Learn everything about the Products of Router Protocol.",
    img: "/router-ac.png",
    // iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    // link: "/ui.earth.com",
  },
  {
    id: 4,
    title: "ToDo List dApp",
    des: "This dApp allows Users to Create Lists of Tasks and Sub-tasks on Aptos.",
    img: "/todo-aptos.png",
    // iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    // link: "/ui.yoom.com",
  },
  {
    id: 5,
    title: "eVault CLI",
    des: "eVault is a CLI Tool in Rust enabling Users to Manage their Passwords.",
    img: "/download.png",
    // iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    // link: "/ui.aiimg.com",
  },
  {
    id: 6,
    title: "AI Summarizing Tool",
    des: "Used for Converting Long Paras/Essays into Understandable Pieces of Text.",
    img: "/ai-summ.png",
    // iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    // link: "/ui.apple.com",
  },
  {
    id: 7,
    title: "NitroGPT Navigator",
    des: "Uses GPT-3.5 to answer Questions from Content on routerprotocol.com",
    img: "/nitro-gpt.png",
    // iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    // link: "/ui.apple.com",
  },
  {
    id: 8,
    title: "AI Image Generation App",
    des: "Generates any Image, Based upon your Prompt using AI.",
    img: "/ai-img.png",
    // iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    // link: "/ui.apple.com",
  },
  {
    id: 9,
    title: "Modern 3D City Design",
    des: "Uses three.js, to view a High Modern City with Shining Stars and Buildings.",
    img: "/modern.png",
    // iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    // link: "/ui.apple.com",
  },
  {
    id: 10,
    title: "Live Loom",
    des: "Uses Socket.io & WebRTCs, to Connect two People via Video Call.",
    img: "/live-loom.png",
    // iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    // link: "/ui.apple.com",
  },
  {
    id: 11,
    title: "Smart Contract Auditing Tool",
    des: "Audits a Smart Contract using AI and Lists down all Vulnerabilities.",
    img: "/ai-smart.png",
    // iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    // link: "/ui.apple.com",
  },
  {
    id: 12,
    title: "CrossZipWrap",
    des: "Smart Contract used to Transfer Funds across multiple Blockchains.",
    img: "/cross-zip-wrap.png",
    // iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    // link: "/ui.apple.com",
  },
  {
    id: 13,
    title: "Crypto Wallet Extension",
    des: "Crypto Wallet Built using Moralis helping to Transfer of Assets.",
    img: "/wallet.png",
    // iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    // link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "",
    name: "SubSix",
    title: "Smart Contract Auditor & Engineer",
  },
  {
    quote:
      "",
    name: "Sahitya Roy",
    title: "Head of Developer Relations @Risein",
  },
  {
    quote:
      "",
    name: "Manish Mehndiratta",
    title: "Director of Platform Engineering @Deloitte",
  },
  {
    quote:
      "",
    name: "Harsh Godhkar",
    title: "Head of DevRel Engineering @Gateway Protocol",
  },
  {
    quote:
      "",
    name: "Muskan Jain",
    title: "Ecosystem Growth Lead @Symboitic",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Developer Relations Engineer @RouterProtocol",
    desc: [
      "Worked on SDK, CLI, and Dev Documentations and weekly audits for Developer Resources, fixed issues in Testnet v2.",
      " Researched more on Ethereum Ecosystem for improving the technology.",
      " Built a Dashboard for analysis of Competitor Bridges like - Across Protocol, Stargate.",
      " Evangelized about the Products - Router Nitro and cross-chain Intent Framework.",
      " Built Router Academy - Platform for Learning CrossChain Development using Router Protocol.",
      " Wrote Technical Articles to help Developers get Onboard.",
    ],
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Building @HaloLabs",
    desc: [
      "Building & Shipping Products in Web3 & AI.",
      " A Team of Crazy Developers who're Making and Breaking Consistently.",
      ""
    ],
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "BlockChain Engineer Intern @DogeCapital",
    desc: [
      "Led the Frontend Engineering Team.",
      " Worked on Solana and other Protocol Integrations.",
      " Did Extensive Testing of the Products like wardrobe.live and fomowtf.com in Alpha and Beta Phase."
    ],
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Research Analyst @BlackRabbit",
    desc: [
      "Conducted in-depth Research on various Cryptocurrency Projects, Blockchain Technology, and Decentralized Finance (DeFi) Protocols.",
      " Especially in Bitcoin, Ethereum, DePin, Solana, RWA Ecosystem. Analyzed Market Trends, Industry news, and emerging Developments in the Crypto Space.",
      " Created high-quality written Reports, including Articles, Blog Posts and Social Media updates, to educate and engage our audience.",
      " Assisted with Report Planning, Editorial Calendar Management, and Report Distribution across Multiple Platforms."
    ], 
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://www.github.com/ShivankK26"
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://www.x.com/ShivankK26"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/shivankkapur"
  },
];

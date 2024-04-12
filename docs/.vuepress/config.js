const sidebar = {
  // "/me/": [
  //     // "profile",
  //     // "project",
  //     // "github"
  // ],
  // "/web/": [
  //     "/web/vue/vue-press"
  // ]
};

const nav = [
  {
    text: "主页",
    link: "/",
  },
  {
    text: "关于",
    items: [
      {
        text: "resume",
        link: "/me/readme.md",
      },
    ],
  },
  {
    text: "Github",
    link: "https://github.com/zhzLuke96",
  },
  {
    text: "StableCanvas",
    link: "https://github.com/StableCanvas",
  },
  {
    text: "LenML",
    link: "https://github.com/lenML",
  },
];

module.exports = {
  title: "luke zhang",
  description: "Without bug, the utmost BUG.",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://github.com/fluidicon.png",
      },
    ],
  ],
  // serviceWorker: true,
  themeConfig: {
    nav,
    sidebar,
    sidebarDepth: 2,
    lastUpdated: "Last Updated",
  },
};

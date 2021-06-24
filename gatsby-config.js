module.exports = {
  siteMetadata: {
    title: "Open GitOps",
    description:
      "Open GitOps is a set of open-source standards, best practices, and community-focused education to help organizations adopt a structured, standardized approach to implementing GitOps.",
    siteUrl: "https://argoproj.github.io",
    social: {
      twitter: "",
      github: "https://github.com/argoproj",
      slack: "https://argoproj.github.io/community/join-slack",
    },
    menuLinks: [
      {
        title: "About",
        url: "/about",
      },
      {
        title: "Community",
        url: "/community",
      },
      {
        title: "Get Involved",
        url: "/get-involved",
      },
      {
        title: "Events",
        url: "/events",
      },
      {
        title: "Blog",
        url: "/blog",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        // extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
              backgroundColor: "white",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./content/blog",
        name: "blog",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "members",
        path: "./src/members/",
      },
      __key: "members",
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
  ],
}

module.exports = {
  siteMetadata: {
    title: "OpenGitOps",
    description:
      "OpenGitOps is a set of open-source standards, best practices, and community-focused education to help organizations adopt a structured, standardized approach to implementing GitOps.",
    siteUrl: "https://github.com/gitops-working-group/gitops-working-group",
    repo: "gitops-working-group/gitops-working-group",
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
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
              backgroundColor: "white",
            },
          },
          `gatsby-remark-prismjs`,
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
        name: "blog",
        path: "./content/blog",
      },
      __key: "blog",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "principles",
        path: "./content/principles",
      },
      __key: "principles",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "events",
        path: "./content/events",
      },
      __key: "events",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "testimonials",
        path: "./content/testimonials",
      },
      __key: "testimonials",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "members",
        path: "./content/members/",
      },
      __key: "members",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./content/pages",
      },
      __key: "pages",
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
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
  ],
}

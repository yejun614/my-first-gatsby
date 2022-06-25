module.exports = {
  siteMetadata: {
    title: `Gatsby Tutorial`,
    subtitle: `Sometimes we need coffee and coding.`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}

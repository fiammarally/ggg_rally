exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    module: {
      loaders: [{
        test: /\.svg$/,
        loader: 'raw-loader',
      }, ],
    },
  })
}

module.exports = {
  siteMetadata: {
    title: `flame`,
    siteUrl: `https://www.gatsbyjs.org`,
    description: `Blazing fast modern site generator for React`,
  },
  plugins: [{
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: "markdown-pages",
      },
    },
    `gatsby-transformer-remark`,
  ],
}

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
  plugins: [
    `gatsby-transformer-remark`,
  ],
}

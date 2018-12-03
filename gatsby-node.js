const path = require(`path`)
// const {
//   createFilePath
// } = require(`gatsby-source-filesystem`)

// exports.onCreateNode = ({
//   node,
//   getNode,
//   actions
// }) => {
//   const {
//     createNodeField
//   } = actions
//   if (node.internal.type === `MarkdownRemark`) {
//     const slug = createFilePath({
//       node,
//       getNode,
//       basePath: `pages`
//     })
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     })
//   }
// }

exports.createPages = ({
  graphql,
  actions
}) => {
  const {
    createPage
  } = actions
  return new Promise((resolve, reject) => {
    const contentful = require('contentful');
    const {
      documentToHtmlString
    } = require('@contentful/rich-text-html-renderer');

    const client = contentful.createClient({
      space: '4hdczd41xjc6',
      accessToken: 'c00c5d9432352d25f5061332e3777f2932d20f1244fd89a0940a1ec15422b75c'
    });

    client.getEntries()
      .then((response) => {
        response.items.forEach((node) => {
          if (node.fields.url && node.fields.content) {
            const html = documentToHtmlString(node.fields.content);
            console.log(node);
            createPage({
              titolo: node.fields.titolo,
              path: `/blog/${node.fields.url}`,
              component: path.resolve(`./src/templates/post.js`),
              context: {
                // Data passed to context is available
                // in page queries as GraphQL variables.
                identifier: node.sys.id,
                titolo: node.fields.titolo,
                data: html,
                slug: `/blog/${node.fields.url}`,
                mainImage: (node.fields.mainImage) ? node.fields.mainImage : null, 
                gallery: node.fields.gallery,
              },
            })
          }
        })
        resolve()
      });
  });

}
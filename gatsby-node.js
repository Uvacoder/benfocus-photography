const fetch = require('node-fetch')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `work` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const allData = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              sort
              title
              category
              thumbnail
              photos
              videos
              url
            }
            fields {
              slug
            }
            html
          }
        }
      }
    }
  `)

  const workList = allData.data.allMarkdownRemark.edges.map(item => {
    item.node.fields.slug = item.node.fields.slug.replace(/\\|\//g, '')
    return item.node
  })

  for (const dataItem of workList) {
    createPage({
      path: `/work/${dataItem.fields.slug}`,
      context: { dataItem },
      component: require.resolve(`./src/templates/work.js`),
    })
  }
}

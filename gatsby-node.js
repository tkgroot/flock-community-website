/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ actions, getNode, node }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({node, getNode, basePath: "pages" })
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const res = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (res.error) {
    reporter.panicOnBuild(
      "Error while running GraphQL query on episode templates"
    )
    return
  }

  res.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const {slug } = node.fields

    createPage({
      path: slug,
      component: path.resolve("./src/templates/showcases.jsx"),
      context: { slug }
    })
  })
}

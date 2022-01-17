const path = require('path');

exports.createPages = async ({ graphql, actions}) => {

    
    const { data } = await graphql(`
        query pageDetails {
            allMdx {
                nodes {
                    frontmatter {
                        slug
                        title
                        description
                        type
                        }
                    id
                }
            }
        }
    `)

    data.allMdx.nodes.forEach(node => {
        actions.createPage({
            path: node.frontmatter.slug,
            component: path.resolve('./src/templates/blog-details.js'),
            context: { 
                slug: node.frontmatter.slug
             }
        })
    });

}

// explicitly defining graphQL schema since having type 
// issues with article banner images

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;
    
    const typeDefs = `
      type Mdx implements Node @infer {
        frontmatter: MdxFrontmatter
      }
      type MdxFrontmatter {
          thumb: File! @fileByRelativePath(path: "src")
          banner: File! @fileByRelativePath(path: "src")
          date: Date @dateformat
          type: String
          slug: String
          description: String
          sliderTxt: String
          title: String
      }
    `
    createTypes(typeDefs)
  }

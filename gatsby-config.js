require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})


module.exports = {
  siteMetadata: {
    title: `RoamBnb - STR specialist`,
    description: `Short term rental management`,
    author: `Roambnb`,
    url: `https://www.roam-bnb.com`, // No trailing slash allowed!
    image: '/favicon.png', // Path to the image placed in the 'static' folder, in the project's root directory.
    type: 'website'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    // `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogposts`,
        path: `${__dirname}/src/blogposts`
      }
    },
    { 
      resolve: `gatsby-plugin-sharp`,
      options: {
        stripMetadata: true
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          blogposts: require.resolve("./src/components/BlogLayout.js"),
          default: require.resolve("./src/components/Layout.js"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1035,
              sizeByPixelDensity: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'RoamBnB - STR experts',
        short_name: 'RoamBnB',
        start_url: '/',
        display: 'standalone',
        icon: 'src/images/logo-full.png' // This path is relative to the root of the site.
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ 
        }
      }
    }
    
    
  ]
};

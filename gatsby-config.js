/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata : {
    title: 'Portfolio on Steroids',
    author: 'George Nikoglou Jr'
  },
  plugins: [
    // {
    //   resolve: 'gatsby-source-contentful',
    //   options: {
    //     spaceId: process.env.CONTENTFUL_SPACE_ID ,
    //     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
    //   }
    // },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [

          `Poppins`,
          `source sans pro\:300,400,400i,500 ,600,700 ,800 ,900` 
        ],
        display: 'swap'
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-playground',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth:750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ],
}

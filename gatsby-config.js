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
    'gatsby-plugin-sass',
    'gatsby-plugin-playground',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    }
  ],
}

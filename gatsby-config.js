module.exports = {
  siteMetadata: {
    title: 'mtphyscs',
    author: 'mtphyscs'
  },

  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    }
  ]
}

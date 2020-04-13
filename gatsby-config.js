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
    },
    'gatsby-plugin-sharp',
    {
      resolve:'gatsby-transformer-remark',
      options:{
        plugins:[
          'gatsby-remark-relative-images',
          {
            resolve:'gatsby-remark-relative-images',
            options:{
              maxWidth: 750,
              linkImagesToOriginal: false,
            }
          }
         


        ]
      }
    }
  ]
}

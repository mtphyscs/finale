module.exports = {
  siteMetadata: {
    title: "mtphyscs",
    author: "mtphyscs",
  },

  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: 'gatsby-source-amazon-wishlist',
      options: {
        wishlistUrl: 'https://www.amazon.com/hz/wishlist/ls/2LUM7XCL2UCCV/ref=nav_wishlist_lists_2?_encoding=UTF8&type=wishlist',
        language: en-US,
        limit:false,
      },
    },

    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
}

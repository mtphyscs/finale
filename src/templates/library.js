import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'

export const data = useStaticQuery(graphql`
{
  allAmazonWishlistItem {
    edges {
      node {
        id
        owner
        title
        url
        price
        features
        comment
        priority
        purchased
        requested
        image {
          url
        }
      }
    }
  }
}
`)

const Book = (edge) => {
  
    return (
        <Layout>
          <Head title={edge.node.title}/>
           <h1>{edge.node.title}</h1>
        </Layout>

    )
}

export default Book

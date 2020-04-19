import React from "react"
import Layout from "../components/layout"
import { Link, useStaticQuery, graphql } from 'gatsby'
import Head from '../components/head'

const Library = () => {
  const data = useStaticQuery(graphql`
    {
      allAmazonWishlistItem {
        edges {
          node {
            title
            url
            image {
              url
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Library" />
      <h1>Library</h1>
      <p>
        Here you’ll find an occasionally-updated list of books I’ve read and
        enjoyed.
      </p>
    </Layout>
  )
}

export default Library

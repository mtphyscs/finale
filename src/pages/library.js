import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import Head from "../components/head"
import libraryStyles from "./library.module.scss"

const Library = () => {
//   const data = useStaticQuery(graphql`
//     {
//       allAmazonWishlistItem {
//         edges {
//           node {
//             url
//             title
//             image {
//               url
//             }
//           }
//         }
//       }
//     }
//   `)

//   return (
//     <Layout>
//       <Head title="Library" />
//       <h1>Library</h1>
//       <h2>
//         Here you’ll find an occasionally-updated list of books I’ve read and
//         enjoyed.
//       </h2>
//       <ol className={libraryStyles.ol}>
//         {data.allAmazonWishlistItem.edges.map(edge => {
//           return (
//             <li>
//               <a href={edge.node.url} target="_blank">
//                 <img
//                   src={edge.node.image.url.replace("SS135_.jpg", "FF400_.jpg")}
//                   alt=""
//                 ></img>
//                 <p className={libraryStyles.a}>{edge.node.title}</p>
//               </a>
//             </li>
//           )
//         })}
//       </ol>
//     </Layout>
//   )
// }

// export default Library

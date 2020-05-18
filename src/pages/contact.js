import React from "react"
import Layout from "../components/layout"
import Head from '../components/head'

const Contact = () => {
  return (
    <Layout>
      <Head title="Visual Art"/>
      <h1>Contact</h1>
      <h2>Name *</h2>
      <form 
      name="contact" 
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      >
        <input name="name" placeholder="name" type="text"/>
        <input name="email" placeholder="email" type="text"/>
        <input name="message" placeholder="message" type="text"/>
        <button>
          SEND
        </button>

      </form>


    </Layout>
  )
}

export default Contact

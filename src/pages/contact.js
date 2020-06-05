import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import contactStyles from './contact.module.scss'

const Contact = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <h3>Name *</h3>
        <input name="name" type="text" />
        <h3>Email *</h3>
        <input name="email"  type="text" />
        <h3>Message *</h3>
        <input className={contactStyles.message}   type="textarea" name="message" rows="10" cols="30" />
        <br/>
        <br/>
        <button>SEND</button>
      </form>
    </Layout>
  )
}

export default Contact

import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

import contactStyles from '../pages/contact.module.scss'

const ContactPage = () => {
  return (
    <Layout>
      <div className={contactStyles.container}>
        <Head title="Contact" /> 
        <h1 className={contactStyles.heading}>Contact</h1>
        <h3>Go to <a  target="_blank" rel="noreferrer" href="https://twitter.com/gnikoglou79">@gnikoglou79</a> on Twitter</h3>
        <h3>Go to my <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/george-nikoglou-54b24532">Profile</a> on LinkedIn</h3>
        <div className={contactStyles.details}>
          <p>Email : georgenison@gmail.com</p>
          <p>Address : Labrianidou & P.Dimitriou 20 Arkadikos Drama, Greece</p>
          <p>Mobile :6945419898</p>
          <p>Office :2512028513</p>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage

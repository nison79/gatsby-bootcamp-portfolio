import React from 'react'

import Footer from '../components/footer'
import Header from '../components/header'

const ContactPage = () => {
  return (
    <div>
      <Header />
      <h1>Contact</h1>
      <h3>Go to <a  target="_blank" href="https://twitter.com/gnikoglou79">@gnikoglou79</a> on Twitter</h3>
      <h3>Go to my <a target="_blank" href="https://www.linkedin.com/in/george-nikoglou-54b24532">Profile</a> on LinkedIn</h3>
      <p>Email : georgenison@gmail.com</p>
      <p>Address : Labrianidou & P.Dimitriou 20 Arkadikos Drama Greece</p>
      <p>Mobile :6945419898</p>
      <p>Office :2512028513</p>
      <Footer />
    </div>
  )
}

export default ContactPage

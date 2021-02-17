import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

function AboutPage() {
  return (
    <Layout>
   
      <h1>About</h1>
      <p>I am George Nikoglou, a father of two daughters Efi and Eli 5 and 2 years old, I studied International Relationship & European Studies in Panteion University of Athens. Also I studied Human Resource Management in Kapodistriakon University of Athens. As the years gone by i fell in love with web development and design and at the last 3 years I am dedicated code guy who likes to build and create things for the web.</p>
    <p>
      <Link to="/contact">Contact Me</Link>
    </p>
    
    </Layout>
  )
}

export default AboutPage

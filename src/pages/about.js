import React from 'react'
import { Link } from 'gatsby'

import aboutStyles from '../pages/about.module.scss'

import Layout from '../components/layout'
import Head from '../components/head'

function AboutPage() {
  return (
    <Layout>
    <div className={aboutStyles.container}>
          <Head title="About"/> 
          <h1 className={aboutStyles.heading}>About</h1>
          <p>I am George Nikoglou, a father of two daughters Efi and Eli 5 and 2 years old, I studied International Relationship & European Studies in Panteion University of Athens. Also I studied Human Resource Management in Kapodistriakon University of Athens. As the years gone by i fell in love with web development and design and at the last 3 years I am dedicated code guy who likes to build and create things for the web.</p>
        <p>
          <Link to="/contact">Let's have a talk!</Link>
        </p>
    </div>
    </Layout>

  )
}

export default AboutPage

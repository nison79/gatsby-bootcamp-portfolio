import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import indexStyles from './index.module.scss'

import Head from '../components/head'


const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <div className={indexStyles.container}>
        
        <h1 className={indexStyles.heading}>Hello.</h1>
        <h2>I'm George, a full-stack developer living in beautiful Greece.</h2>
        <p>Need a Developer ? <Link className={indexStyles.anchor} to="/contact">Contact Me</Link></p>
      </div>
    </Layout>
  )
}

export default IndexPage;

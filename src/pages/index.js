import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import indexStyles from './index.module.scss'


const IndexPage = () => {
  return (
    <Layout>
      <div className={indexStyles.container}>
        <h1>Hello.</h1>
        <h2>I'm George,<br/> a full-stack developer living in beautiful Greece.</h2>
        <p>Need a Developer? <Link to="/contact">Contact Me</Link></p>
      </div>
    </Layout>
  )
}

export default IndexPage;

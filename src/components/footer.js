import React from 'react'
import { graphql , useStaticQuery } from 'gatsby'
import footerStyles from './footer.module.scss'

const Footer = () => {
  const data = useStaticQuery(graphql`
  query {
site {
  siteMetadata {
    author
  }
}
}
`)


  return (
    <div>
      <p className={footerStyles.p}>Created by {data.site.siteMetadata.author}, © 2021</p>
    </div>
  )
}

export default Footer

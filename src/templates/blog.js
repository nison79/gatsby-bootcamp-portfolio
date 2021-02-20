import React from 'react'
import  { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'
import Head from '../components/head'

import blogStyles from './blog.module.scss'

// export const query = graphql`
//   query (
//   $slug: String!
// ) {
//   markdownRemark (
//     fields: {
//       slug: {
//         eq: $slug
//       }
//     }
//   ) {
//     frontmatter {
//       title
//       date
//     }
//     html
//   }
// }
// `

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug : {eq: $slug}) {
      title
      publishedDate(formatString:"MMMM Do, YYYY")
      body {
        raw
      }
    }
  }
` 

const Blog = (props) => {
  // const options = {
  //   renderNode : {
  //     "embedded-asset-block" : (node) => {
  //       const alt = node.data.target.fields.title['en-US']
  //       const url =node.data.target.fields.file['en-US'].url
  //       return <img alt={alt} src={url} />
  //     }
  //   }
  // }
  return (
    <Layout>
    <Head title={props.data.contentfulBlogPost.title}/> 
      <div className={blogStyles.container}>
        <h1 className={blogStyles.heading}>{props.data.contentfulBlogPost.title}</h1>
        <p className={blogStyles.date}>{props.data.contentfulBlogPost.publishedDate}</p>
        {documentToReactComponents(JSON.parse(props.data.contentfulBlogPost.body.raw))}
        
      </div>
    </Layout>
  )
}

export default Blog

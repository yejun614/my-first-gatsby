// https://www.gatsbyjs.com/docs/how-to/routing/adding-markdown-pages/#read-files-into-gatsby-from-the-filesystem

import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Template({data}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <span>{frontmatter.date}</span>

      <article dangerouslySetInnerHTML={{ __html: html }}>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        slug
        title
      }
    }
  }
`

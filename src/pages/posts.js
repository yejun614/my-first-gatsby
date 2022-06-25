import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import * as Styles from "../css/posts.module.sass"

const PostsPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                slug
                date
                title
              }
            }
          }
        }
      }
    `
  )

  return (
    <Layout path="/posts">
      <h1>Posts</h1>

      <div className={Styles.postsContainer}>
      {data.allMarkdownRemark.edges.map((post) => (
        <div key={post.node.id} className={Styles.items}>
          <span>{post.node.frontmatter.date}</span>

          <Link to={post.node.frontmatter.slug}>
            <h2>{post.node.frontmatter.title}</h2>
          </Link>
          
        </div>
      ))}
      </div>
    </Layout>
  )
}

export default PostsPage
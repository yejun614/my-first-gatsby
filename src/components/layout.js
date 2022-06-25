// https://www.gatsbyjs.com/docs/tutorial/part-2/
// https://www.gatsbyjs.com/docs/how-to/routing/layout-components/

import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import * as Styles from "../css/layout.module.sass"

const Layout = ({ path, children }) => {
  // [Gatsby.js로 블로그 만들기[6]]
  // https://siisee111.medium.com/gatsby-js%EB%A1%9C-%EB%B8%94%EB%A1%9C%EA%B7%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0-6-11334abf5880
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `
  )

  const navItems = [
    {
      id: 1,
      title: 'Home',
      path: '/',
    },
    {
      id: 2,
      title: 'About',
      path: '/about',
    },
    {
      id: 3,
      title: 'Posts',
      path: '/posts',
    },
    {
      id: 4,
      title: 'Contact',
      path: '/contact',
    },
  ]

  return (
    <div id={Styles.layout}>
      <header>
        <Link to="/"><h1>{data.site.siteMetadata.title}</h1></Link>
        <h2>{data.site.siteMetadata.subtitle}</h2>
      </header>

      <nav>
        {navItems.map(item => (
          <Link
            key={item.id}
            to={item.path}
            className={`${path === item.path ? Styles.active : ''}`}
          >
            {item.title}
          </Link>
        ))}
      </nav>

      <main>
        {children}
      </main>

      <footer>
        <Link to="/">Go to home</Link>
        <span>This site is just test.</span>
      </footer>
    </div>
  )
}

export default Layout;
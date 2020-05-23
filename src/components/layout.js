/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import 'bootstrap/dist/css/bootstrap.css'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div
    style={{
      backgroundColor: 'rgb(3,3,3)', minHeight: '100vh', margin: '0 auto'
    }}
  >
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          textAlign: "center",
          margin: `0 auto`,
          maxWidth: 1500,
          color: 'rgb(215,218,220)',
        }}
      >
        <main>{children}</main>
        <footer>
          ©2020 Tanner Dane Art
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

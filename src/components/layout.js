import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/">
            <img alt="logo-mercenary" width="250" src="https://firebasestorage.googleapis.com/v0/b/mercenary-squad.appspot.com/o/mercenary_squad_logo_name_black.svg?alt=media&token=f8208bc0-1339-4d0f-832b-26f34ba01696" />
          </Link>
        </div>
        <Navigation />
      </header>
      {children}
      <footer className="site-footer">
        <p>&copy; 2020 Mercenary Squad &bull; Acesse <a href="https://mercenarysquad.com">mercenarysquad.com</a></p>
      </footer>
    </div>
  )
}
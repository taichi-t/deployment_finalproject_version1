import { Link } from "gatsby"
import React, { Component } from "react"

import styles from "./header.module.scss"

class Header extends Component {
  render() {
    const ListLink = props => (
      <li>
        <Link to={props.to} activeClassName={styles.activeLink}>
          {props.children}
        </Link>
      </li>
    )
    return (
      <header className={styles.siteHeader}>
        <nav>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <ul style={{ alignSelf: "flex-start", textDecoration: "none" }}>
              <li style={{ padding: "1rem 0 0 1rem" }}>
                <Link to="/">
                  <p
                    style={{
                      fontSize: "2rem",
                      color: "#363636",
                      padding: "0.5rem",
                      marginBottom: "1rem",
                    }}
                  >
                    Impactraction
                  </p>
                </Link>
              </li>
            </ul>
            <ul style={{ fontSize: "1.2rem" }}>
              <ListLink to={`/`}>home</ListLink>
              <ListLink to={`/blog/`}>blog</ListLink>
              <ListLink to={`/contact/`}>contact</ListLink>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header

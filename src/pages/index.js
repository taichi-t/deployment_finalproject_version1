import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/SEO/SEO"
import Layout from "../components/Layout/Layout"

import Button from "@material/react-button"
import Card from "@material/react-card"

// import idahoOutlineLightTheme from "../images/icons/idaho-outline--lightTheme.svg"
import heroImage from "../images/undraw-hero-image.svg"

// Styles
import "../styles/app.scss"

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allContentfulBlogPosts.edges
    const site = data.site.siteMetadata

    return (
      <Layout>
        <SEO />
        <section className="anoun-home--section1">
          <h2
            style={{
              textAlign: "center",
              fontSize: "26px",
              fontWeight: "bold",
            }}
          >
            {site.titleTemplate}
          </h2>

          <img src={heroImage} alt="anoun-hero" />

          <Link to="/contact/">
            <Button raised className="mdc-button--round">
              Contact Us
            </Button>
          </Link>
        </section>
        <section className="anoun-home--section2">
          <h3>This is the power statement section</h3>
          <h3>Say something that stands out</h3>
          <h3>Say something visitors will remember</h3>
          <h3>
            Say something <strong>bold</strong> about your brand
          </h3>
        </section>
        <section className="anoun-home--section3">
          <h2>Recent Posts</h2>
          <div className="blog-posts__container">
            {posts.map(({ node }) => {
              const title = node.title || node.slug
              return (
                <div key={node.slug} className="post-container">
                  <Link to={`/blog/${node.slug}`}>
                    <Card className="mdc-card--clickable anoun-blog-card">
                      <Img
                        className="mdc-card__media"
                        fluid={node.image.fluid}
                      />
                      <div className="anoun-blog-card-content__container">
                        <h3>{title}</h3>
                        <small>{node.createdAt}</small>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: `${node.expert} ...`,
                          }}
                        />
                      </div>
                    </Card>
                  </Link>
                </div>
              )
            })}
          </div>
        </section>
      </Layout>
    )
  }
}

export default IndexPage

export const indexQuery = graphql`
  {
    site {
      siteMetadata {
        title
        titleTemplate
        description
        siteUrl
        image
        owner
      }
    }
    allContentfulBlogPosts(limit: 2, sort: { fields: createdAt, order: DESC }) {
      edges {
        node {
          createdAt(formatString: "MMMM DD, YYYY")
          id
          slug
          title
          image {
            fluid(maxWidth: 500, quality: 92) {
              ...GatsbyContentfulFluid
            }
          }
          expert
        }
      }
    }
  }
`

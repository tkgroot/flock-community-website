import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import ArrowLeftLight from "../images/icons/arrows/arrow-left-light.svg"
import { Author } from "../components/author"
import { ShowcaseBody, ShowcaseHeader } from "../components/showcase"
import { peoples } from "../content/community"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        label
        author
      }
    }
  }
`

function ShowcasesTemplate({ data }) {
  const { frontmatter, html } = data.markdownRemark
  const { title, label, author } = frontmatter
  const { firstname, lastname, image } = peoples.filter(p => p.firstname === author)[0]

  return (
    <Layout>
      <SEO title={`Showcases | `} />
      <div className="container-fluid h-100">
        <div className="row showcase-wrapper h-100">
          <article className="showcase">
            <ShowcaseHeader
              title={title}
              label={label}
              link={
                <Link className="arrow arrow-box positioned-left" to="/#showcases">
                  <img src={ArrowLeftLight} alt="arrow left" />
                </Link>
              }
            />
            <ShowcaseBody content={html} />
            <footer className="showcase-footer">
              <Author
                name={`${firstname} ${lastname}`}
                img={
                  // eslint-disable-next-line global-require, import/no-dynamic-require
                  image ? require(`../images/community/${image}`) : ""
                }
                minimal
              />
            </footer>
          </article>
        </div>
      </div>
    </Layout>
  )
}

ShowcasesTemplate.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object,
}

ShowcasesTemplate.defaultProps = {
  data: {},
}

export default ShowcasesTemplate

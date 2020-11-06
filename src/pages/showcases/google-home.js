import React from "react"
import {Link} from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import AuthorPhoto from "../../images/community/vincent-hs.jpg"
import ArrowLeftLight from "../../images/icons/arrows/arrow-left-light.svg"

import {ShowcaseBody, ShowcaseHeader} from "../../components/showcase"
import {contentShowcases} from "../../content"
import { Author } from "../../components/author"

const [content, _] = contentShowcases
const ShowcaseGoogleHome = () => (
  <Layout>
    <SEO title={`Showcases | ${content.seoTitle}`} />
    <div className="container-fluid h-100">
      <div className="row showcase-wrapper h-100">
        <article className="showcase">
          <ShowcaseHeader
            title={content.title}
            label={content.label}
            link={
              <Link className="arrow arrow-box positioned-left" to="/#showcases">
                <img src={ArrowLeftLight} alt="arrow left" />
              </Link>
            }
          />
          <ShowcaseBody content={content.content} />
          <footer className="showcase-footer">
            <Author name={content.author.name} img={AuthorPhoto} minimal />
          </footer>
        </article>
      </div>
    </div>
  </Layout>
)

export default ShowcaseGoogleHome

import React from "react"
import {Link} from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import ArrowLeftLight from "../../images/icons/arrows/arrow-left-light.svg"
import AuthorImg from "../../images/community/vincent-hs.jpg"

import {contentShowcases} from "../../content"
import {ShowcaseBody, ShowcaseHeader} from "../../components/showcase"
import {Author} from "../../components/author"

const [_, content] = contentShowcases
const ShowcaseServerSideRendering = () => (
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
            <Author name={"Vincent"} description={""} minimal img={AuthorImg} />
          </footer>
        </article>
      </div>
    </div>
  </Layout>
)

export default ShowcaseServerSideRendering

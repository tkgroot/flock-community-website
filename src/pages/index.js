/* eslint-disable react/jsx-filename-extension */
import React from "react"
import {Link, graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CalendarFlockDayIcon from "../images/icons/calendar/calendar_w-flockdays@2x.png"
import SocialEventsIcon from "../images/icons/social-events/social-events.png"
import PresentationIcon from "../images/icons/presentation/presentation_w-wireframe@2x.png"
import FlockTeam from "../images/community/group.jpg"
import UserFotoJerre from "../images/community/jerre-hs.jpg"
import UserFotoVincent from "../images/community/vincent-hs.jpg"

import {contentFlockCommunity, contentHeroLanding} from "../content"
import {HeroLanding, HeroFlockCommunity} from "../components/hero"
import {BoxItem} from "../components/box"
import {ShowcaseCard} from "../components/cards"
import {Author} from "../components/author"
import { peoples } from "../content/community"

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            author
            coverImage
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const showcases = data.allMarkdownRemark.edges

  return (
  <Layout>
    <SEO title="Home" />
    <div className="container-fluid">
      <div className="row">
        <div className="banner-img">
          <img src={FlockTeam} alt="het enthousiaste Flock team buiten het kantoor" />
        </div>
      </div>
      <div className="row bg-yellow bg-polygon-reverse">
        <div className="container">
          <p className="mt-3 h4">
            <i>{contentHeroLanding.label}</i>
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row hero-full-page">
          <HeroLanding />
        </div>
      </div>
      <a name="community"></a>
      <div className="row">
        <div className="bg-yellow bg-polygon">
          <HeroFlockCommunity />
        </div>
      </div>
      <section>
        <div className="container">
          <div className="row mb-5">
            {contentFlockCommunity.introParagraphs.map(paragraph => (
              <p className="paragraph-lg">{paragraph}</p>
            ))}
          </div>
        </div>
        <div className="row box-height bg-blue-light py-5">
          <BoxItem
            title={contentFlockCommunity.rows[0].title}
            imgComp={<img src={CalendarFlockDayIcon} alt={contentFlockCommunity.rows[0].img.alt} />}
            paragraph={contentFlockCommunity.rows[0].paragraph}
          />
        </div>
        <div className="row box-height py-5">
          <BoxItem
            boxReverse
            title={contentFlockCommunity.rows[1].title}
            imgComp={<img src={SocialEventsIcon} alt={contentFlockCommunity.rows[1].img.alt} />}
            paragraph={contentFlockCommunity.rows[1].paragraph}
          />
        </div>
        <div className="row box-height bg-blue-light py-5">
          <BoxItem
            title={contentFlockCommunity.rows[2].title}
            imgComp={<img src={PresentationIcon} alt={contentFlockCommunity.rows[2].img.alt} />}
            paragraph={contentFlockCommunity.rows[2].paragraph}
          />
        </div>
      </section>
      <section>
        <div className="row">
          <header className="col-lg-2">
            <a name="showcases">
              <h2>Onze Showcases</h2>
            </a>
          </header>
          <div className="card-deck mx-auto">
            {showcases.map(({node}) => {
              const {fields, frontmatter} = node
              const {title, author, coverImage} = frontmatter
              const {firstname, lastname, image } = peoples.filter(p => p.firstname === author)[0]

              return (
            <Link to={fields.slug}>
              <ShowcaseCard
                title={title}
                img={require(`../images/showcases/${coverImage}`)}
                label={
                  <Author
                    name={`${firstname} ${lastname}`}
                    minimal
                    img={require(`../images/community/${image}`)}
                  />
                }
              />
            </Link>
            )})}
          </div>
        </div>
      </section>
    </div>
  </Layout>
)}

export default IndexPage

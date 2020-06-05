import React from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import CalendarFlockDayIcon from "../images/icons/calendar/calendar_w-flockdays@2x.png"
import SocialEventsIcon from "../images/icons/social-events/social-events.png"
import PresentationIcon from "../images/icons/presentation/presentation_w-wireframe@2x.png"
import GoogleHomeImg from "../images/showcases/google-home.jpeg"
import ServerSideRenderImg from "../images/showcases/stock.jpg"
import FlockTeam from "../images/community/group.jpg"
import UserFotoJerre from "../images/community/jerre-hs.jpg"
import UserFotoVincent from "../images/community/vincent-hs.jpg"

import {contentFlockCommunity, contentHeroLanding, contentShowcaseCards} from "../content"
import {HeroLanding, HeroFlockCommunity} from "../components/hero"
import {BoxItem} from "../components/box"
import {ShowcaseCard} from "../components/cards"
import {Author} from "../components/author"

const IndexPage = () => (
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
          <p className="mt-3 h4">{contentHeroLanding.label}</p>
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
        <div className="row box-height bg-blue-light p-3">
          <BoxItem
            title={contentFlockCommunity.rows[0].title}
            imgComp={<img src={CalendarFlockDayIcon} alt={contentFlockCommunity.rows[0].img.alt} />}
            paragraph={contentFlockCommunity.rows[0].paragraph}
          />
        </div>
        <div className="row box-height p-3">
          <BoxItem
            boxReverse
            title={contentFlockCommunity.rows[1].title}
            imgComp={<img src={SocialEventsIcon} alt={contentFlockCommunity.rows[1].img.alt} />}
            paragraph={contentFlockCommunity.rows[1].paragraph}
          />
        </div>
        <div className="row box-height bg-blue-light p-3">
          <BoxItem
            title={contentFlockCommunity.rows[2].title}
            imgComp={<img src={PresentationIcon} alt={contentFlockCommunity.rows[2].img.alt} />}
            paragraph={contentFlockCommunity.rows[2].paragraph}
          />
        </div>
      </section>
      <section className="">
        <div className="row">
          <header className="col-lg-2">
            <a name="showcases">
              <h2>Onze Showcases</h2>
            </a>
          </header>
          <div className="card-deck mx-auto">
            <Link to="/showcases/google-home/">
              <ShowcaseCard
                title={contentShowcaseCards[0].title}
                img={GoogleHomeImg}
                label={
                  <Author name={contentShowcaseCards[0].author.name} minimal img={UserFotoVincent} />
                }
              />
            </Link>
            <Link to="/showcases/server-side-rendering/">
              <ShowcaseCard
                title={contentShowcaseCards[1].title}
                img={ServerSideRenderImg}
                label={
                  <Author
                    name={contentShowcaseCards[1].author.name}
                    minimal
                    img={UserFotoJerre}
                  />
                }
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default IndexPage

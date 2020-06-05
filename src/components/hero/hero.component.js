import React from "react"
import {contentHeroLanding, contentHeroFlockCommunity} from "../../content"

/**
 *
 */
export function HeroLanding() {
  const {label, headline, paragraph, body} = contentHeroLanding

  return (
    <div className="hero">
      <div>
        <span className="label marked-text">{label}</span>
        <h1 className="hero-headline display-1">
          {headline.map(item => (
            <span>
              {item}
              <br />
            </span>
          ))}
        </h1>
        <p>{paragraph}</p>
        <span>{body}</span>
      </div>
    </div>
  )
}

/**
 *
 */
export function HeroFlockCommunity() {
  const {label, headline, paragraph} = contentHeroFlockCommunity

  return (
    <div className="container hero">
      <span className="text--uppercase label">{label}</span>
      <h2 className="hero-headline display-1">{headline}</h2>
      <p dangerouslySetInnerHTML={{__html: paragraph}}></p>
    </div>
  )
}

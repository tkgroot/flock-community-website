import React from "react"
import PropTypes from "prop-types"

import ArrowRightLight from "../../images/icons/arrows/arrow-right-light.svg"
import ArrowLeftLight from "../../images/icons/arrows/arrow-left-light.svg"

export function ShowcaseCard(props) {
  const {img, alt, title, label, arrow, figcaption} = props

  return (
    <div className="card showcase-card">
      <div>
        {arrow === "left" ? (
          <div className="arrow arrow-box positioned-left">
            <img src={ArrowLeftLight} alt="arrow left" />
          </div>
        ) : (
          <div className="arrow arrow-box positioned-right">
            <img src={ArrowRightLight} alt="arrow right" />
          </div>
        )}
        <figure>
          <img className="showcase-img" src={img} alt={alt} />
          {figcaption && <figcaption>
            <span dangerouslySetInnerHTML={{__html: figcaption}} />
          </figcaption>}
        </figure>
        <div className="showcase-card-content">
          <span className="showcase-label">{label}</span>
          <h2 className="h4 showcase-title">
            <span className="marked-link">{title}</span>
          </h2>
        </div>
      </div>
    </div>
  )
}

ShowcaseCard.propTypes = {
  img: PropTypes.element,
  alt: PropTypes.string,
  figcaption: PropTypes.string,
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  arrow: PropTypes.string,
}

ShowcaseCard.defaultProps = {
  arrow: "right",
  figcaption: undefined,
}

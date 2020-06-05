import React from "react"
import PropTypes from "prop-types"

export function SimpleCard(props) {
  const {img, alt, title, content} = props

  return (
    <div className="card">
      <img src={img} alt={alt} />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-content">{content}</p>
      </div>
    </div>
  )
}

SimpleCard.propTypes = {
  img: PropTypes.element,
  alt: PropTypes.string,
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

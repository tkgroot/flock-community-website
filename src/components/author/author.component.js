/* eslint-disable react/jsx-filename-extension */
import React from "react"
import PropTypes from "prop-types"

export function Author(props) {
  const { align, minimal, name, description, img } = props

  return (
    <div className={minimal ? "author-info author-info-sm" : "author-info"}>
      <figure className={minimal ? "author-icon author-icon-sm" : "author-icon"}>
        <img src={img} alt="foto of the author" />
      </figure>
      <div className={`author-content-${align}`}>
        {minimal ? <h4 className="fs-base">by {name}</h4> : <h4 className="h4">{name}</h4>}
        {!minimal && <p>{description}</p>}
      </div>
    </div>
  )
}
Author.propTypes = {
  align: PropTypes.string,
  minimal: PropTypes.bool,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  img: PropTypes.element,
}

Author.defaultProps = {
  align: "center",
  minimal: false,
}

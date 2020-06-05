import React from "react"
import PropTypes from "prop-types"

export function ShowcaseHeader(props) {
  const {title, label, link, share} = props

  return (
    <header className="showcase-header">
      {link}
      <span className="showcase-label">{label}</span>
      <h1 className="showcase-headline">{title}</h1>
      <div>{share}</div>
    </header>
  )
}
ShowcaseHeader.propTypes = {
  title: PropTypes.string.isRequired,
  label: PropTypes.string,
  link: PropTypes.element,
  share: PropTypes.element,
}

export function ShowcaseBody(props) {
  const {content} = props

  return (
    <div className="showcase-content">
      {content.map((paragraph, key) => (
        <p
          className={key === 0 ? "showcase-paragraph first-letter" : "showcase-paragraph"}
          key={key}
        >
          {paragraph}
        </p>
      ))}
    </div>
  )
}

ShowcaseBody.propTypes = {
  content: PropTypes.arrayOf(PropTypes.string),
}

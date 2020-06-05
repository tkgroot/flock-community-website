import React from "react"
import PropTypes from "prop-types"

/**
 *
 * @param {*} props
 */
export function BoxItem(props) {
  const {boxReverse, children, title, imgComp, paragraph} = props
  console.log(boxReverse)

  return (
    <React.Fragment>
      <div className={boxReverse ? "box box--reverted" : "box"}>
        <figure className="col-md-5 col-lg-4">
          {imgComp}
        </figure>
        <div className="col-md-7 col-lg-8">
          <div className="box-content">
            {title && <h3>{title}</h3>}
            <p>{paragraph}</p>
            <div className="box-action">{children}</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

BoxItem.propTypes = {
  boxReverse: PropTypes.bool,
  children: PropTypes.element,
  title: PropTypes.string,
  imgComp: PropTypes.element.isRequired,
  paragraph: PropTypes.string.isRequired,
}

BoxItem.defaultProps = {
  boxReverse: false,
}

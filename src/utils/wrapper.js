import React from "react"

/**
 *
 * @param {*} storyFn
 * @deprecated
 */
// export const containerWrapper = (storyFn, style) => (
//   <div className="container-fluid" style={style}>
//     <div className="row">{storyFn()}</div>
//   </div>
// )

/**
 *
 * @param {*} storyFn
 */
export const containerFluidRowWrapper = (storyFn, style) => (
  <div className="container-fluid" style={style}>
    <div className="row">{storyFn()}</div>
  </div>
)

/**
 *
 * @param {*} storyFn
 */
export const containerFluidWrapper = (storyFn, style) => (
  <div className="container-fluid" style={style}>{storyFn()}</div>
)

/**
 *
 * @param {*} storyFn
 */
export const containerWrapper = storyFn => (
  <div className="container">{storyFn()}</div>
)

/**
 *
 * @param {*} storyFn
 */
export const containerRowWrapper = (storyFn, style) => (
  <div className="container" style={style}>
    <div className="row">{storyFn()}</div>
  </div>
)

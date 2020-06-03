import React from "react"
import {boolean, select, text, withKnobs} from "@storybook/addon-knobs"

import UserFoto from "../../images/brands/flock/logo_only.svg"
import {Author} from "./author.component"
import {containerRowWrapper, containerWrapper} from "../../utils/wrapper"

export default {
  title: "Components | Author",
  decorators: [withKnobs],
}

const opts = {
  start: "start",
  center: "center",
  end: "end",
}
const authorName = "Denholm Reynholm"
const paragraph = `was the head and founder of his eponymous business empire Reynholm Industries.
He set up the multi-million-pound business with only a dream and £6,000,000. However there were
many irregularities in the business' pension fund, so much so that in 2007, Denholm committed
suicide by jumping from the top floor of the business' headquarters, leaving his only son, Douglas,
as head of Reynholm Industries. `

export const Default = () => {
  return (
    <Author
      align={select("alignment", opts, opts.center, "author")}
      minimal={boolean("minimal", false, "author")}
      name={text("name", authorName, "author")}
      description={text("paragraph", paragraph, "author")}
      img={UserFoto}
    />
  )
}
Default.story = {
  decorators: [storyFn => containerRowWrapper(storyFn)],
}

// export const AuthorHover = () => {
//   return (
//     <a href="#">
//       <Author
//         align={select("alignment", opts, opts.center, "author")}
//         minimal={boolean("minimal", true, "author")}
//         name={text("name", authorName, "author")}
//         description={text("paragraph", paragraph, "author")}
//         img={UserFoto}
//       />
//     </a>
//   )
// }
// AuthorHover.story = {
//   decorators: [storyFn => containerWrapper(storyFn, {padding: "3rem"})]
// }

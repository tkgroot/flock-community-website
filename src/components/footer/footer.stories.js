import React from "react"
import {action} from "@storybook/addon-actions"
import {Footer} from "./index"

export default {
  title: "Components | Footer",
  parameters: {
    componentSubtitle: "The Footer for the Website",
  },
  component: Footer,
  excludeStories: /.*Data$/,
}

export const FooterLinksData = [
  {
    caption: "Community",
    listItems: [
      ["Flock days", "#"],
      ["Join", "#"],
    ],
  },
  {
    caption: "About",
    listItems: [
      ["Showcase", "#"],
      ["Onze Developers", "#"],
      ["Jobs", "#"],
    ],
  },
  {
    caption: "Contact",
    listItems: [
      ["Flock Software Engineering B.V.", ""],
      ["+31 (0)6 10 03 99 82", ""],
      ["Oudegracht aan de Werf 62", ""],
      ["3511 AC Utrecht", ""],
    ],
  },
]

/**
 * Use this at the end of the website
 */
export const Default = () => {
  return <Footer navItems={FooterLinksData} />
}

Default.story = {
  name: "Footer Component",
}

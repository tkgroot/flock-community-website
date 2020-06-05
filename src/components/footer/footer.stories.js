import React from "react"
import {action} from "@storybook/addon-actions"
import {Footer, NavGroup} from "./index"

export default {
  title: "Components | Footer",
  parameters: {
    componentSubtitle: "The Footer for the Website",
  },
  component: Footer,
  excludeStories: /.*Data$/,
}

/**
 * Use this at the end of the website
 */
export const Default = () => {
  return <Footer>{NavGroup()}</Footer>
}

Default.story = {
  name: "Footer Component",
}

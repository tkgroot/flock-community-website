import React from "react"
import {text, withKnobs} from "@storybook/addon-knobs"

import {Header} from "./index"
import { containerFluidWrapper } from "../../utils/wrapper"

export default {
  title: "Components | Header",
  decorators: [withKnobs],
}

export const Navigation = () => <Header />
Navigation.story = {
  name: "Navigation",
  components: Header,
}

export const ImageHeader = () => {
  return (
    <div className="row bg-yellow bg-polygon-reverse">
      <div className="container">
        <p className="mt-3 h4">
          <i>{text("header", "You win again gravity.")}</i>
        </p>
      </div>
    </div>
  )
}
ImageHeader.story = {
  name: "Image Header",
  decorators: [storyFn => containerFluidWrapper(storyFn)]
}

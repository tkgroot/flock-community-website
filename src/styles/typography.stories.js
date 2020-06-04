import React from "react"
import {withKnobs, text} from "@storybook/addon-knobs"
import {containerWrapper} from "../utils"

export default {
  title: "Design System | Typography",
  decorators: [withKnobs],
}

export const Headlines = () => (
  <div>
    <h1>h1</h1>
    <h2>h2</h2>
    <h3>h3</h3>
    <h4>h4</h4>
    <h5>h5</h5>
    <h6>h6</h6>
  </div>
)
Headlines.story = {
  name: "Headlines",
}

export const Paragraph = () => {
  const content = text(
    "paragraph",
    `Et nisi amet amet nostrud exercitation nostrud deserunt ex. Laborum laborum cupidatat
        occaecat ut elit amet anim nostrud ipsum consectetur. Esse excepteur velit adipisicing ad
        laboris consequat adipisicing aliquip id. Fugiat sint labore Lorem aliquip amet Lorem et
        exercitation exercitation.`,
  )
  return (
    <div>
      <div>
        <h4>paragraph</h4>
        <p>{content}</p>
      </div>
      <div>
        <h4>paragraph with class "paragraph-lg"</h4>
        <span>paragraph with $font-size-lg</span>
        <p className="paragraph-lg">{content}</p>
      </div>
    </div>
  )
}
Paragraph.story = {
  name: "Paragraph",
  decorators: [story => containerWrapper(story)],
}

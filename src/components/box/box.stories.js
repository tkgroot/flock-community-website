import React from "react"
import {boolean, text, withKnobs} from "@storybook/addon-knobs"
import {containerFluidWrapper} from "../../utils/wrapper"
import {BoxItem} from "./box.component"
import {contentFlockCommunity} from "../../content"
import CalendarFlockDayIcon from "../../images/icons/calendar/calendar_w-flockdays@2x.png"

export default {
  title: "Components | Box",
  decorators: [withKnobs],
}

export const Default = () => {
  const [contentBox, ,] = contentFlockCommunity.rows
  const reversed = boolean("reversed", false)

  return (
    <div className="row box-height py-5">
      <BoxItem
        boxReversed={reversed}
        title={text("title", contentBox.title)}
        imgComp={<img src={CalendarFlockDayIcon} alt={contentBox.img.alt || ""} />}
        paragraph={text("paragraph", contentBox.paragraph)}
      />
    </div>
  )
}
Default.story = {
  name: "Box Item",
  decorators: [storyFn => containerFluidWrapperWrapper(storyFn)],
}

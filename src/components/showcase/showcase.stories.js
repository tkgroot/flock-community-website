import React from "react"
import {text, withKnobs} from "@storybook/addon-knobs"

import ArrowLeftLight from "../../images/icons/arrows/arrow-left-light.svg"

import {containerFluidRowWrapper, containerFluidWrapper} from "../../utils/wrapper"
import {ShowcaseHeader, ShowcaseBody} from "./index"
import {contentShowcases} from "../../content"
import {Author} from "../author"

export default {
  title: "Components | Showcase",
  decorators: [withKnobs, storyFn => containerFluidRowWrapper(storyFn)],
}

export const Default = () => {
  const [showcase] = contentShowcases
  const name = "Denholm Reynholm"
  const description = `Gentleman, when I first started Reynholm Industries, I had just two
  things in my possession: a simple dream, and six million pounds. Today, I have a business
  empire the like of which the world has never seen the like of which. I hope it doesn't
  sound arrogant when I say, that I am the greatest man in the world.`

  return (
    <div className="row showcase-wrapper">
      <article className="showcase">
        <ShowcaseHeader
          title={showcase.title}
          label={showcase.label}
          link={
            <a className="arrow arrow-box positioned-left" href="#">
              <img src={ArrowLeftLight} alt="arrow left" />
            </a>
          }
        />
        <ShowcaseBody content={showcase.content} />
        <footer className="showcase-footer">
          <Author name={name} description={description} img="" />
        </footer>
      </article>
    </div>
  )
}
Default.story = {
  name: "Showcase Article",
  decorators: [storyFn => containerFluidWrapper(storyFn)],
}

export const Header = () => {
  const [showcase] = contentShowcases
  const {title, label} = showcase

  return (
    <div className="showcase">
      <ShowcaseHeader
        title={text("title", title, "header")}
        label={text("label", label, "header")}
        link={
          <a className="arrow arrow-box positioned-left" href="#">
            <img src={ArrowLeftLight} alt="arrow left" />
          </a>
        }
      />
    </div>
  )
}
Header.story = {
  name: "Showcase Header",
}

export const Body = () => {
  const [showcase] = contentShowcases

  return <ShowcaseBody content={showcase.content} />
}
Body.story = {
  name: "Showcase Body",
}

export const Footer = () => {
  const name = text("name", "Denholm Reynholm", "author")
  const description = text(
    "description",
    `Gentleman, when I first started Reynholm Industries, I had just two
  things in my possession: a simple dream, and six million pounds. Today, I have a business
  empire the like of which the world has never seen the like of which. I hope it doesn't
  sound arrogant when I say, that I am the greatest man in the world.`,
    "author",
  )

  return (
    <footer className="showcase-footer">
      <Author name={name} description={description} />
    </footer>
  )
}
Footer.story = {
  name: "Showcase Footer",
  decorators: [storyFn => containerFluidRowWrapper(storyFn, {marginTop: "3rem"})],
}

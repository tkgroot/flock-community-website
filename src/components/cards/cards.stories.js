import React from "react"
import {select, text, withKnobs} from "@storybook/addon-knobs"

import GoogleHome from "../../images/showcases/google-home.jpeg"
import AuthorFoto from "../../images/community/jerre-hs.jpg"
import IconMonitor from "../../images/icon-monitor-code.svg"
import IconBackend from "../../images/icon-backend.svg"
import IconDatabase from "../../images/icon-database.svg"

import {containerFluidRowWrapper} from "../../utils/wrapper"
import {Author} from "../author"
import {SimpleCard, ShowcaseCard} from "./index"

export default {
  title: "Components | Cards",
  decorators: [withKnobs, storyFn => containerFluidRowWrapper(storyFn)],
}

export const SimpleCardComp = () => {
  const opts = {
    frontend: IconMonitor,
    backend: IconBackend,
    database: IconDatabase,
  }
  const title = "Frontend"
  const content = `Officia eu magna enim veniam nulla ullamco voluptate ea minim. Dolore in labore duis nisi
          ad aute adipisicing nostrud veniam duis. Ea veniam do aliqua exercitation nisi elit.`

  return (
    <SimpleCard
      img={select("icon", opts, opts.frontend, "card")}
      alt="image alt"
      title={text("title", title, "card")}
      content={text("content", content, "card")}
    />
  )
}

SimpleCardComp.story = {
  name: "Simple Card",
}

export const SimpleCardGrid = () => {
  const cardContent = `Mollit est deserunt esse in exercitation esse nisi occaecat ut ea
  id id. Aute proident ex nisi fugiat ex nulla dolore in id. Amet elit eu cillum quis.`
  const cards = [
    {
      title: "Fontend",
      content: cardContent,
      icon: IconMonitor,
    },
    {
      title: "Backend",
      content: cardContent,
      icon: IconBackend,
    },
    {
      title: "Database",
      content: cardContent,
      icon: IconDatabase,
    },
  ]

  return (
    <div className="card-group">
      {cards.map((card, key) => (
        <SimpleCard
          key={key}
          img={card.icon}
          alt="image alt"
          title={card.title}
          content={card.content}
        />
      ))}
    </div>
  )
}

export const ShowcaseCardComp = () => {
  const label = text("label", "Bol.com - Google Assistant", "showcaseCard")
  const title = text("title", "Hey Google, I would like to buy a book at Bol.com", "showcaseCard")
  const opts = {
    unset: null,
    left: "left",
    right: "right",
  }
  const arrow = select("arrow", opts, opts.unset, "showcaseCard")

  return (
    <ShowcaseCard
      img={GoogleHome}
      alt="a google home on a table"
      title={title}
      label={label}
      arrow={arrow}
    />
  )
}
ShowcaseCardComp.story = {
  name: "Showcase Card",
}

export const ShowcaseCardWithAuthor = () => {
  const title = text("title", "Hey Google, I would like to buy a book at Bol.com", "showcaseCard")
  const author = {
    align: select("alignment", {center: "center", start: "start", end: "end"}, "center", "author"),
    name: text("name", "Jerre van Veluw", "author"),
  }

  return (
    <ShowcaseCard
      img={GoogleHome}
      alt="a google home on a table"
      title={title}
      label={<Author align={author.align} name={author.name} img={AuthorFoto} minimal />}
    />
  )
}

export const ShowcaseCardGrid = () => {
  const cards = [
    {
      name: "Denholm Reynholm",
      title: "Ad duis duis ipsum aute consectetur voluptate.",
      label: "Anim ex in officia cillum sint tempor commodo esse esse enim magna.",
    },
    {
      name: "Morris Moss",
      title: "Officia officia cupidatat eiusmod veniam adipisicing.",
      label: "Ut sint est mollit et dolore Lorem fugiat eiusmod labore consequat sit exercitation.",
    },
  ]
  return (
    <div className="card-deck">
      {cards.map((card, key) => (
        <ShowcaseCard
          img={GoogleHome}
          alt="a google home on a table"
          title={card.title}
          label={<Author name={card.name} minimal />}
        />
      ))}
    </div>
  )
}

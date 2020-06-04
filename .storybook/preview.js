import {addParameters} from "@storybook/react"
import "../src/styles.scss"

addParameters({
  backgrounds: [
    {name: "white", value: "#fff", default: true},
    {name: "brown", value: "#383302"},
    {name: "yellow", value: "#F8E008"},
    {name: "dark-brown-black", value: "#201D1D"},
    {name: "light-cotta", value: "#AD9E9E"},
    {name: "light-brown", value: "#6E6464"},
  ],
})

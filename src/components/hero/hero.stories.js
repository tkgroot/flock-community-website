import React from "react"
import {boolean, withKnobs} from "@storybook/addon-knobs"
import {HeroLanding, HeroFlockCommunity} from "./hero.component"
import {containerFluidWrapper, containerFluidRowWrapper} from "../../utils"

export default {
  title: "Components | Hero",
}

export const Hero = () => <HeroLanding />
Hero.story = {
  name: "Landing",
  component: HeroLanding,
  // decorators: [storyFn => containerFluidRowWrapper(storyFn)],
}
export const HeroWithLabel = () => <HeroLanding showLabel />
HeroWithLabel.story = {
  name: "Hero with Label",
  component: HeroLanding,
}

export const HeroBanner = () => (
  <div className="bg-yellow bg-polygon hero-flock-community">
    <HeroFlockCommunity />
  </div>
)
HeroBanner.story = {
  name: "Flock Community",
  component: HeroFlockCommunity,
  // decorators: [storyFn => containerFluidWrapper(storyFn)],
}

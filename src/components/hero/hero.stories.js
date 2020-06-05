import React from "react"
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

export const HeroBanner = () => (
  <div className="bg-yellow bg-polygon">
    <HeroFlockCommunity />
  </div>
)
HeroBanner.story = {
  name: "Flock Community",
  component: HeroFlockCommunity,
  // decorators: [storyFn => containerFluidWrapper(storyFn)],
}

/**
 * header.component is primarily build for storybook
 * header.js is used which is an exact copy of this for the website´s header
 */
import React from "react"

import LogoCommunity from "../../images/brands/flock/logo_community.svg"
import LogoFlock from "../../images/brands/flock/logo.svg"

export function Header() {
  const _handleClick = () => {
    document.querySelector(".nav-menu").classList.toggle("show")
  }

  return (
    <nav className="navbar">
      <a className="navbar-brand" href="/">
        <img className="flock-community-logo" src={LogoCommunity} alt="flock.community logo" />
        <img className="flock-simple-logo" src={LogoFlock} alt="flock.community logo" />
      </a>
      <button className="navbar-toggler collapsed" onClick={_handleClick}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="nav-menu">
        <ul className="navbar-collapse">
          <li>
            <a className="navbar-link" data-scroll="" href="/#community" onClick={_handleClick}>
              Over ons
            </a>
          </li>
          <li>
            <a className="navbar-link" data-scroll="" href="/#showcases" onClick={_handleClick}>
              Showcases
            </a>
          </li>
          <li>
            <a className="navbar-link" data-scroll="" href="#contact" onClick={_handleClick}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

import {Link} from "gatsby"
import React from "react"
import PropTypes from "prop-types"

import LogoCommunity from "../images/brands/flock/logo_community.svg"
import LogoFlock from "../images/brands/flock/logo.svg"

const Header = ({siteTitle}) => {
  const _handleClick = () => {
    document.querySelector(".nav-menu").classList.toggle("show")
  }

  return (
    <header className="navbar-header">
      <nav className="navbar">
        <Link className="navbar-brand" to="/">
          <img className="flock-community-logo" src={LogoCommunity} alt="flock.community logo" />
          <img className="flock-simple-logo" src={LogoFlock} alt="flock.community logo" />
        </Link>
        <button className="navbar-toggler collapsed" onClick={_handleClick}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="nav-menu">
          <ul className="navbar-collapse">
            <li>
              <Link className="navbar-link" data-scroll="" to="/#community" onClick={_handleClick}>
                Over ons
              </Link>
            </li>
            <li>
              <Link className="navbar-link" data-scroll="" to="/#blogs" onClick={_handleClick}>
                Blogs
              </Link>
            </li>
            <li>
              <Link className="navbar-link" data-scroll="" to="/#contact" onClick={_handleClick}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

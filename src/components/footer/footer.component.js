import React from "react"

import FlockLogoOnly from "../../images/brands/flock/logo_only.svg"
import GithubLogo from "../../images/brands/github/GitHub-Mark-Light-64px.png"
import LinkedInLogo from "../../images/brands/linkedin/LI-In-Bug.png"
import FacebookLogo from "../../images/brands/facebook/f_logo_RGB-White_100.png"

function NavGroup(title, items) {
  return (
    <div className="nav-group-item">
      <h5>About</h5>
      <ul>
        <li>
          <a className="footer-link" href="#">
            Showcases
          </a>
        </li>
        <li>
          <a className="footer-link" href="#">
            Onze Developers
          </a>
        </li>
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <div className="page-footer mt-auto">
      <img src={FlockLogoOnly} alt="Flock logo, a black bird on yellow background" />

      <div className="nav-group">
        {NavGroup()}
        <div className="nav-group-item">
          <h5>Contact</h5>
          <ul>
            <li>Flock Software Engineering B.V.</li>
            <li>+31(0)6 10 03 99 82</li>
            <li>Oudegracht aan de Werf 62</li>
            <li>3511 AC Utrecht</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="footer-content footer-icons">
        <div className="icon-link-group">
          <div className="icon-link-group-item">
            <a href="https://github.com/flock-community/">
              <img src={GithubLogo} alt="Github logo" />
            </a>
          </div>
          <div className="icon-link-group-item">
            <a href="https://facebook.com/flock-community/">
              <img src={FacebookLogo} alt="Facebook logo" />
            </a>
          </div>
          <div className="icon-link-group-item">
            <a href="https://linkedin.com/flock-community/">
              <img src={LinkedInLogo} alt="Github logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

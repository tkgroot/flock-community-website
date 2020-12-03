import React from "react"
import {Link} from "gatsby"

export function GatsbyNavGroup() {
  return (
    <div className="nav-group-item">
      <h5>About</h5>
      <ul>
        <li>
          <Link className="footer-link" to="/#community">
            Over ons
          </Link>
        </li>
        <li>
          <Link className="footer-link" to="/#blogs">
            Blogs
          </Link>
        </li>
      </ul>
    </div>
  )
}

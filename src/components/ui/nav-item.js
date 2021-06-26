import * as React from "react"
import { Link } from "gatsby"
import classNames from "classnames"
import { linkRegex } from "../../helpers"

const NavItem = ({ title, url }) => {
  const regex = linkRegex()
  const linkClass = classNames({
    "lg:font-bold text-dark hover:text-primary": true,
  })

  return (
    <li className="border-t border-light py-3 lg:py-0 lg:border-none">
      {regex.test(url) && (
        <a href={url} className={linkClass}>
          {" "}
          {title}{" "}
        </a>
      )}

      {!regex.test(url) && (
        <Link to={url} className={linkClass} activeClassName="nav-item--active">
          {title}
        </Link>
      )}
    </li>
  )
}

export default NavItem

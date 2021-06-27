import * as React from "react"
import { Link } from "gatsby"
import classNames from "classnames"
import { linkRegex } from "../../helpers"

const NavItem = ({ title, url, border, color }) => {
  const regex = linkRegex()
  const linkClass = classNames({
    "lg:font-bold": true,
    "text-night hover:text-accent": color === "night",
    "text-dark hover:text-accent": color !== "night",
  })

  const itemClass = classNames({
    "border-t py-3 lg:py-0 lg:border-none": true,
    "border-light/50": border === "light" || !border,
    "border-night/10": border === "dark",
  })

  return (
    <li className={itemClass}>
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

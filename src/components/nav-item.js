import * as React from "react"
import { Link } from "gatsby"
import classNames from "classnames"

const NavItem = ({ title, url, external, color }) => {
  const linkClass = classNames({
    "lg:font-bold": true,
    "text-dark hover:text-primary": color === "light",
    "text-dark lg:text-white hover:text-primary": color !== "light",
  })

  return (
    <li className="border-t border-light py-3 lg:py-0 lg:border-none">
      {external && (
        <a href={url} className={linkClass}>
          {" "}
          {title}{" "}
        </a>
      )}

      {!external && (
        <Link to={url} className={linkClass} activeClassName="nav-item--active">
          {title}
        </Link>
      )}
    </li>
  )
}

export default NavItem

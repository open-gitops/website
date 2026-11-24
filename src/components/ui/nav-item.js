import * as React from "react"
import { Link } from "gatsby"
import { linkRegex } from "../../helpers"

const NavItem = ({ title, url }) => {
  const linkClass =
    "inline-flex items-center min-h-[44px] text-[15px] font-semibold text-ink hover:text-link"

  return (
    <li className="border-b border-line lg:border-none">
      {linkRegex().test(url) ? (
        <a href={url} className={linkClass}>
          {title}
        </a>
      ) : (
        <Link to={url} className={linkClass} activeClassName="underline underline-offset-8 decoration-2">
          {title}
        </Link>
      )}
    </li>
  )
}

export default NavItem

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import classNames from "classnames"
import NavItem from "./ui/nav-item"
import Button from "./ui/button"

const Nav = ({ isOpen }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            menuLinks {
              title
              url
            }
          }
        }
      }
    `
  )

  // "Get involved" is a button rather than a link.
  const navClass = classNames({
    "fixed z-[998] -right-full top-0 w-4/6 h-screen pt-20 pb-16 bg-surface overflow-y-auto transition-right duration-300 in-expo shadow-2xl": true,
    "lg:ml-auto lg:flex lg:static lg:w-auto lg:h-auto lg:p-0 lg:bg-transparent lg:overflow-visible lg:shadow-none": true,
    "!right-0": isOpen,
  })

  return (
    <nav aria-label="Main" className={navClass}>
      <ul className="px-4 lg:flex lg:items-center lg:gap-x-6 lg:px-0">
        {site.siteMetadata.menuLinks
          .filter(link => link.url !== "/get-involved")
          .map(link => (
            <NavItem key={link.title} title={link.title} url={link.url} />
          ))}
      </ul>

      <div className="px-4 mt-6 lg:hidden">
        <Button to="/get-involved" label="Get involved" variant="accent" />
      </div>
    </nav>
  )
}

export default Nav

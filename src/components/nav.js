import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import classNames from "classnames"
import NavItem from "./ui/nav-item"
import Stargazers from "./ui/stargazers"
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock"

const Nav = ({ isOpen, color }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            repo
            menuLinks {
              title
              url
            }
          }
        }
      }
    `
  )

  const [target, setTarget] = React.useState(null)
  const targetRef = React.createRef()

  React.useEffect(() => {
    setTarget(targetRef.current)

    if (target) {
      if (isOpen) {
        disableBodyScroll(target)
      } else {
        enableBodyScroll(target)
      }
    }
  }, [isOpen, target, targetRef])

  React.useEffect(() => {
    return function cleanup() {
      clearAllBodyScrollLocks()
    }
  }, [])

  const navClass = classNames({
    "absolute z-998 -right-full top-0 w-4/6 h-screen pt-14 bg-white overflow-y-scroll transition-right duration-300 in-expo shadow-2xl": true,
    "lg:items-center lg:ml-auto lg:flex lg:relative lg:right-auto lg:top-auto lg:w-auto lg:h-auto lg:pt-0 lg:bg-none lg:bg-transparent lg:overflow-y-visible lg:shadow-none": true,
    "!right-0": isOpen,
  })

  return (
    <nav ref={targetRef} className={navClass}>
      <ul className="px-4 text-lg lg:flex lg:h-auto lg:space-x-6 lg:space-y-0 lg:text-lg">
        {site.siteMetadata.menuLinks.map(link => (
          <NavItem
            key={link.title}
            title={link.title}
            url={link.url}
            color={color}
          />
        ))}
      </ul>

      <div className="mt-4 ml-4 lg:ml-2 lg:mt-0 lg:w-32 lg:text-right">
        <Stargazers repo={site.siteMetadata.repo} />
      </div>
    </nav>
  )
}

export default Nav

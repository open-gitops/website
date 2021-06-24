import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "./grid"
import Title from "./title"
import LogoIcon from "../svg/icon.svg"
import Button from "../components/button"
import NavItem from "../components/nav-item"

const Footer = () => {
  const date = new Date()
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

  return (
    <footer className="relative pt-10 pb-8">
      <Container className="text-white text-center">
        <Button to="/" type="primary" label="Get Involved" />

        <nav className="py-8">
          <ul className="px-4 text-sm lg:flex lg:justify-center lg:h-auto lg:space-x-6 lg:space-y-0">
            {site.siteMetadata.menuLinks.map(link => (
              <NavItem key={link.title} title={link.title} url={link.url} />
            ))}
          </ul>
        </nav>

        <LogoIcon className="mx-auto" />
        <small className="mt-4 max-w-3xl mx-auto block text-center">
          {date.getFullYear()} &copy; <Title />
        </small>
      </Container>
    </footer>
  )
}

export default Footer

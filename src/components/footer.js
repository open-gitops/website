import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "./ui/grid"
import Title from "./ui/title"
import Button from "./ui/button"
import NavItem from "./ui/nav-item"
import LogoIcon from "../svg/icon.svg"
import GwgIcon from "../svg/gitops-working-group-icon.svg"

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
        <Button to="/get-involved" label="Get Involved" />

        <nav className="py-8">
          <ul className="px-4 text-sm lg:flex lg:justify-center lg:h-auto lg:space-x-6 lg:space-y-0">
            {site.siteMetadata.menuLinks.map(link => (
              <NavItem key={link.title} title={link.title} url={link.url} />
            ))}
          </ul>
        </nav>

        <LogoIcon className="mx-auto" />

        <small className="mt-4 max-w-3xl mx-auto px-8 block text-center">
          {date.getFullYear()} &copy; <Title />. Overseen by the{" "}
          <a
            href="https://github.com/gitops-working-group/gitops-working-group"
            target="_blank"
            rel="noopener noreferrer"
            className="underline">
            GitOps Working Group{" "}
            <GwgIcon className="inline-block w-auto h-4 ml-1" />
          </a>
        </small>
      </Container>
    </footer>
  )
}

export default Footer

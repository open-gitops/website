import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "./ui/grid"
import Title from "./ui/title"
import Button from "./ui/button"
import NavItem from "./ui/nav-item"
import Social from "./ui/social"
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
    <footer className="relative pt-20 pb-8 text-night">
      <Container className="text-center">
        <Button to="/get-involved" label="Get Involved" className="mb-12" />

        <LogoIcon className="mx-auto" />

        <div className="mt-5 max-w-2xl mx-auto">
          <Social size="sm" />
        </div>

        <nav className="pt-9">
          <ul className="px-4 text-sm font-bold lg:flex lg:justify-center lg:h-auto lg:space-x-6 lg:space-y-0">
            {site.siteMetadata.menuLinks.map(link => (
              <NavItem
                key={link.title}
                title={link.title}
                url={link.url}
                border="dark"
                color="night"
              />
            ))}
          </ul>
        </nav>

        <small className="mt-4 max-w-3xl mx-auto px-8 block text-center">
          {date.getFullYear()} &copy; <Title />. Overseen by the{" "}
          <a
            href="https://github.com/cncf/tag-app-delivery"
            target="_blank"
            rel="noopener noreferrer"
            className="underline">
            CNCF App Delivery TAG{" "}
            <GwgIcon className="inline-block w-auto h-4 ml-1" />
          </a>
        </small>
        <small className="mt-4 max-w-3xl mx-auto px-8 block text-center">
          &copy; {date.getFullYear()} The Linux Foundation. All rights reserved.
          The Linux Foundation has registered trademarks and uses trademarks.
          For a list of trademarks of The Linux Foundation, please see our{" "}
          <a
            href="https://www.linuxfoundation.org/trademark-usage"
            target="_blank"
            rel="noopener noreferrer"
            className="underline">
            Trademark Usage{""}
          </a>{" "}
          page.
        </small>
      </Container>
    </footer>
  )
}

export default Footer

import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Title from "./ui/title"
import LogoType from "../svg/logotype.svg"

const linkClass =
  "inline-flex items-center min-h-[44px] text-[15px] font-semibold text-ink hover:text-link"

const Footer = () => {
  const year = new Date().getFullYear()
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            menuLinks {
              title
              url
            }
            social {
              github
              slack
              twitter
              reddit
            }
          }
        }
      }
    `
  )
  const { social } = site.siteMetadata
  const socialLinks = [
    ["GitHub", social.github],
    ["Slack", social.slack],
    ["Twitter", social.twitter],
    ["Reddit", social.reddit],
  ]

  return (
    <footer className="bg-surface border-t border-line">
      <div className="container flex flex-col gap-5 pt-10 pb-14 text-sm text-muted">
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2">
          <Link to="/" className="text-ink hover:text-link">
            <span className="sr-only">
              <Title />
            </span>
            <LogoType className="w-auto h-5" aria-hidden="true" />
          </Link>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6">
            {site.siteMetadata.menuLinks.map(link => (
              <Link key={link.url} to={link.url} className={linkClass}>
                {link.title}
              </Link>
            ))}
            {socialLinks.map(([title, url]) => (
              <a
                key={title}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}>
                {title}
              </a>
            ))}
          </nav>
        </div>

        <p className="max-w-3xl">
          {year} &copy; <Title />. Overseen by the{" "}
          <a href="https://github.com/cncf/tag-app-delivery/tree/main/gitops-wg">
            GitOps Working Group
          </a>
          . &copy; {year} The Linux Foundation. All rights reserved. The Linux
          Foundation has registered trademarks and uses trademarks. For a list
          of trademarks of The Linux Foundation, please see our{" "}
          <a href="https://www.linuxfoundation.org/trademark-usage">
            Trademark Usage
          </a>{" "}
          page.
        </p>
      </div>
    </footer>
  )
}

export default Footer
